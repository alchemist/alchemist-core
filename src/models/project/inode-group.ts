import {INode} from "../nodes/inode";
import {IWorkspaceConfig} from "@/models/project/iworkspace-config";

export interface INodeGroup
{
    readonly displayName: string;
    nodes: Array<INode>;
    workspaceConfig: IWorkspaceConfig;
}