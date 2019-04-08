import {INodeGroup} from "./inode-group";

export interface IProject
{
    projectName: string;
    projectType: string;
    version: string;
    outputDirectory: string;

    metadata: { [key: string]: any };

    nodeGroups: Array<INodeGroup>;
}
