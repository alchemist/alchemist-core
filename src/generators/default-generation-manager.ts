import {IGenerationManager} from "./igeneration-manager";
import {IProject} from "../models/project/iproject";
import {GeneratedCode} from "./generated-code";
import {INodeGenerator} from "./inode-generator";
import {INode} from "../models/nodes/inode";
import {INodeGroup} from "../models/project/inode-group";
import {IGeneratedCode} from "./igenerated-code";
//import {formatCode} from "../formatter/csharp-formatter";
import {nodeGeneratorRegistry} from "../registries/node-generator-registry";

import { remote } from 'electron';
import {dirname} from "path";
import {IProjectGenerator} from "@/generators/iproject-generator";
const fs = remote.require('fs-extra');

export class DefaultGenerationManager implements IGenerationManager
{
    public async generateSpecificForNode(generator: INodeGenerator, node: INode, group: INodeGroup, project: IProject): Promise<IGeneratedCode> {
        const generatedCode = await generator.generate(node, group, project);
        //const formattedCode = await formatCode(generatedCode);
        const fileLocation = generator.computeFileLocation(node, group, project);
        return new GeneratedCode(generatedCode, fileLocation);
    }

    public async generateForNode(node: INode, group: INodeGroup, project: IProject): Promise<Array<IGeneratedCode>> {
        const generators = nodeGeneratorRegistry.getGeneratorsFor(node);
        if(!generators || generators.length == 0) {
            console.log(`Cannot find generators for ${node.type.id}`);
            return;
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
        return Promise.resolve();
    }

    public generateForProject(generator: IProjectGenerator, project: IProject): Promise<Array<IGeneratedCode>> {
        return Promise.resolve();
    }

    public async outputCode(content: string, location: string,  overwriteExisting = false)
    {
        if(overwriteExisting === false)
        {
            if(fs.existsSync(location))
            { return; }
        }
        //const formattedCode = await formatCode(content);
        const directory = dirname(location);
        await fs.ensureDir(directory);
        await fs.writeFile(location, content);
    }

    public async generateAll(project: IProject): Promise<void> {
        for (const nodeGroup of project.nodeGroups) {
            for (const node of nodeGroup.nodes) {
                const generators = nodeGeneratorRegistry.getGeneratorsFor(node);
                for (const generator of generators) {
                    const generatedCode = await this.generateSpecificForNode(generator, node, nodeGroup, project);
                    await this.outputCode(generatedCode.code, generatedCode.fileLocation, generator.replaceExisting);
                }
            }
        }
        return Promise.resolve();
    }
}