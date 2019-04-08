import {IProject} from "../models/project/iproject";
import {INodeGenerator} from "./inode-generator";
import {INode} from "../models/nodes/inode";
import {INodeGroup} from "../models/project/inode-group";
import {IGeneratedCode} from "./igenerated-code";
import {IProjectGenerator} from "./iproject-generator";

export interface IGenerationManager
{
    generateSpecificForNode(generator: INodeGenerator, node: INode, group: INodeGroup, project: IProject): Promise<IGeneratedCode>
    generateForNode(node: INode, group: INodeGroup, project: IProject): Promise<Array<IGeneratedCode>>
    generateSpecificForProject(generator: IProjectGenerator, project: IProject): Promise<IGeneratedCode>
    generateForProject(project: IProject): Promise<Array<IGeneratedCode>>
    generate(project: IProject): Promise<void>
}