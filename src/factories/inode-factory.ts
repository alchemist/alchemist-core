import {Point} from "../models/rendering/point";
import {INode} from "../models/nodes/inode";

export interface INodeFactory
{
    create: (nodeTypeId: string, position: Point, args?: any) => INode;
}