import {INode} from "@/models/nodes/inode";
import {INodeGroup} from "@/models/project/inode-group";
import {IProject} from "@/models/project/iproject";

export interface INodeGenerator
{
    readonly name: string;
    readonly version: string;
    readonly replaceExisting: boolean;
    canHandleType(node: INode): boolean;
    computeFileLocation(node: INode, group: INodeGroup, project: IProject): string;
    generate(node: INode, group: INodeGroup, project: IProject, options?: any): Promise<string>;
}