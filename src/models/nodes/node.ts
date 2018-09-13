import {Point} from "../rendering/point";
import {NodeType} from "./node-type";
import {INode} from "./inode";
import {INodeData} from "./inode-data";
import {v4 as uuid} from "uuid";

export class Node<T extends INodeData> implements INode
{
    public id: string;
    public data: T;

    protected constructor(public type: NodeType, public position: Point = new Point())
    {
        this.id = uuid();
    }
}