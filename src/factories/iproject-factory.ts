import {IProject} from "../models/project/iproject";

export interface IProjectFactory
{
    create: (projectTypeId: string, projectName: string, projectDirectory: string, args?: any) => IProject;
}