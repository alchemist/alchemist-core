import {INode} from "../nodes/inode";
import {IWorkspaceConfig} from "./iworkspace-config";

export interface INodeGroup
{
    readonly displayName: string;
    readonly nodeGroupTypeId: string;
    nodes: Array<INode>;
    workspaceConfig: IWorkspaceConfig;
}