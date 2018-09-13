import {INodeGroup} from "./inode-group";

export interface IProject
{
    projectName: string;
    projectType: string;
    version: string;
    outputDirectory: string;

    nodeGroups: Array<INodeGroup>;
}
