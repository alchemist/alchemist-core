import {IProject} from "../models/project/iproject";

export interface IProjectFactory
{
    create: (projectTypeId: string, args?: any) => IProject;
}