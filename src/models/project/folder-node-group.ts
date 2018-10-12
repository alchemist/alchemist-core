import {INodeGroup} from "./inode-group";
import {WorkspaceConfig} from "./workspace-config";
import {INode} from "../nodes/inode";

export class FolderNodeGroup implements INodeGroup
{
    public get displayName(): string
    { return this.name; }

    public constructor(public name = "", public workspaceConfig = new WorkspaceConfig(), public nodes: Array<INode> = []){}
}