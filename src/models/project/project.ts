import {IProject} from "./iproject";
import {INodeGroup} from "./inode-group";

export class Project implements IProject
{
    public nodeGroups: Array<INodeGroup> = [];

    public constructor(public projectType: string, public version: string, public projectName: string, public outputDirectory: string){}
}
