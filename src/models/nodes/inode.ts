import {Point} from "../rendering/point";
import {NodeType} from "./node-type";
import {INodeData} from "./inode-data";

export interface INode
{
    id: string;
    data: INodeData;
    type: NodeType;
    position: Point;
}