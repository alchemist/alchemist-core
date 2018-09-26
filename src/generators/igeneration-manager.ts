import {IProject} from "@/models/project/iproject";
import {INodeGenerator} from "@/generators/inode-generator";
import {INode} from "@/models/nodes/inode";
import {INodeGroup} from "@/models/project/inode-group";
import {IGeneratedCode} from "@/generators/igenerated-code";
import {IProjectGenerator} from "@/generators/iproject-generator";

export interface IGenerationManager
{
    generateSpecificForNode(generator: INodeGenerator, node: INode, group: INodeGroup, project: IProject): Promise<IGeneratedCode>
    generateForNode(node: INode, group: INodeGroup, project: IProject): Promise<Array<IGeneratedCode>>
    generateSpecificForProject(generator: IProjectGenerator, project: IProject): Promise<IGeneratedCode>
    generateForProject(generator: IProjectGenerator, project: IProject): Promise<Array<IGeneratedCode>>
    generateAll(project: IProject): Promise<void>
}