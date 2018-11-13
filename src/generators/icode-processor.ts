import {IGeneratedCode} from "./igenerated-code";

export const DefaultOrder = 100;

export interface ICodeProcessor
{
    order: number;
    canHandleType(generatedCode: IGeneratedCode): boolean;
    process(generatedCode: IGeneratedCode): Promise<any>;
}