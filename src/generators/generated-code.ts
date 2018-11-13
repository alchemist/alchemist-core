import {IGeneratedCode} from "./igenerated-code";
import {INode} from "../models/nodes/inode";

export class GeneratedCode implements IGeneratedCode
{
    constructor(public code = "", public fileLocation = "", public originatingNode: INode = null) {}
}