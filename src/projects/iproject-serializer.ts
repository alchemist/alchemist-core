import {IProject} from "../models/project/iproject";

export interface IProjectSerializer
{
    serialize(project: IProject): string;
    deserialize(projectData: string|object): IProject;
}