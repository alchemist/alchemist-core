import {IProject} from "@/models/project/iproject";

export interface IProjectGenerator
{
    readonly name: string;
    readonly version: string;
    readonly replaceExisting: boolean;
    canHandleType(project: IProject): boolean;
    computeFileLocation(project: IProject): string;
    generate(project: IProject, options?: any): Promise<string>;
}