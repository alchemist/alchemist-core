import {IGeneratedCode} from "./igenerated-code";

export class GeneratedCode implements IGeneratedCode
{
    constructor(public code = "", public fileLocation = "") {}
}