import {IGenerationManager} from "./igeneration-manager";
import {IProjectGenerator} from "./iproject-generator";
import {IFileSystem} from "../filesystem/ifilesystem";
import {INodeGenerator} from "./inode-generator";
import {INode} from "../models/nodes/inode";
import {IProject} from "../models/project/iproject";
import {INodeGroup} from "../models/project/inode-group";
import {IGeneratedCode} from "./igenerated-code";
import {GeneratedCode} from "./generated-code";
import {codeProcessorRegistry} from "../registries/code-processor-registry";
import {nodeGeneratorRegistry} from "../registries/node-generator-registry";
import {projectGeneratorRegistry} from "../registries/project-generator-registry";

export class DefaultGenerationManager implements IGenerationManager
{
    constructor(private fileSystem: IFileSystem){}

    public async generateSpecificForNode(generator: INodeGenerator, node: INode, group: INodeGroup, project: IProject): Promise<IGeneratedCode> {
        const rawCodeGeneration = await generator.generate(node, group, project);
        const fileLocation = generator.computeFileLocation(node, group, project);
        let generatedCode = new GeneratedCode(rawCodeGeneration, fileLocation, node, { replaceExisting: generator.replaceExisting });
        await this.ProcessCode(generatedCode);
        return generatedCode;
    }

    private async ProcessCode(generatedCode: IGeneratedCode) : Promise<any>
    {
        const applicableProcessors = codeProcessorRegistry.getProcessorsFor(generatedCode);
        applicableProcessors.forEach(async x => {
            generatedCode = await x.process(generatedCode);
        });
    }

    public async generateForNode(node: INode, group: INodeGroup, project: IProject): Promise<Array<IGeneratedCode>> {
        const generators = nodeGeneratorRegistry.getGeneratorsFor(node);
        if(!generators || generators.length == 0) {
            console.log(`Cannot find generators for Node:${node.type.id}`);
            return [];
        }

        const allGeneratedCode = [];
        for (const generator of generators) {
            const generatedCode = await this.generateSpecificForNode(generator, node, group, project);
            allGeneratedCode.push(generatedCode);
        }

        return allGeneratedCode;
    }

    public async generateSpecificForProject(generator: IProjectGenerator, project: IProject): Promise<IGeneratedCode>
    {
        const rawCodeGeneration = await generator.generate(project);
        const fileLocation = generator.computeFileLocation(project);
        let generatedCode = new GeneratedCode(rawCodeGeneration, fileLocation, null, { replaceExisting: generator.replaceExisting });
        return generatedCode;
    }

    public async generateForProject(project: IProject): Promise<Array<IGeneratedCode>> {
        const generators = projectGeneratorRegistry.getGeneratorsFor(project);
        if(!generators || generators.length == 0) {
            console.log(`Cannot find generators for Project:${project.projectType}`);
            return [];
        }

        const allGeneratedCode = [];
        for (const generator of generators) {
            const generatedCode = await this.generateSpecificForProject(generator, project);
            allGeneratedCode.push(generatedCode);
        }

        return allGeneratedCode;
    }

    public async outputCode(generatedCode: IGeneratedCode, overwriteExisting = false)
    {
        if(overwriteExisting === false)
        {
            if(this.fileSystem.fileExists(generatedCode.fileLocation))
            { return; }
        }

        await this.ProcessCode(generatedCode);
        await this.fileSystem.ensureDirectory(generatedCode.fileLocation);
        await this.fileSystem.writeFile(generatedCode.fileLocation, generatedCode.code);
    }

    public async generate(project: IProject): Promise<void> {
        for (const nodeGroup of project.nodeGroups) {
            for (const node of nodeGroup.nodes) {
                const generatedCodeFiles = await this.generateForNode(node, nodeGroup, project);
                for(const generatedCode of generatedCodeFiles)
                { await this.outputCode(generatedCode, generatedCode.metadata.replaceExisting); }
            }
        }

        const generatedProjectFiles = await this.generateForProject(project);
        for(const generatedProjectFile of generatedProjectFiles)
        { await this.outputCode(generatedProjectFile, generatedProjectFile.metadata.replaceExisting); }

        return Promise.resolve();
    }
}