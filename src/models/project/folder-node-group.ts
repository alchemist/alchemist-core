import {INodeGroup} from "@/models/project/inode-group";
import {WorkspaceConfig} from "@/models/project/workspace-config";
import {INode} from "@/models/nodes/inode";

export class FolderNodeGroup implements INodeGroup
{
    public get displayName(): string
    { return this.name; }

    public constructor(public name = "", public workspaceConfig = new WorkspaceConfig(), public nodes: Array<INode> = []){}
}