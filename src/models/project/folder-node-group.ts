import {INodeGroup} from "./inode-group";
import {NodeGroupType} from "./node-group-type";
import {WorkspaceConfig} from "./workspace-config";
import {INode} from "../nodes/inode";

export class FolderNodeGroup implements INodeGroup
{
    public static NodeGroupType = new NodeGroupType("folder-node-group", "Folder");

    public get displayName(): string
    { return this.name; }

    public get nodeGroupTypeId()
    { return FolderNodeGroup.NodeGroupType.id; }

    public constructor(public name = "", public workspaceConfig = new WorkspaceConfig(), public nodes: Array<INode> = []){}
}