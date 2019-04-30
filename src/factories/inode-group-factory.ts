import {INodeGroup} from "../models/project/inode-group";

export interface INodeGroupFactory
{
    create: (nodeGroupTypeId: string, name: string, args?: any) => INodeGroup;
}