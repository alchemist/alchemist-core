import {INode} from "../models/nodes/inode";

export interface IGeneratedCode
{
    originatingNode: INode;
    code: string;
    fileLocation: string;
}