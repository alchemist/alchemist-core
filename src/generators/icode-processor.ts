import {IGeneratedCode} from "./igenerated-code";

export interface ICodeProcessor
{
    order: number;
    canHandleType(generatedCode: IGeneratedCode): boolean;
    process(generatedCode: IGeneratedCode): Promise<any>;
}