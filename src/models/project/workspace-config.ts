import {IWorkspaceConfig} from "./iworkspace-config";
import {Point} from "../rendering/point";

export class WorkspaceConfig implements IWorkspaceConfig
{
    constructor(public size = 10000, public scale = 1, public translation = null)
    {
        if(translation == null)
        { this.translation = new Point(size/2, size/2); }
    }
}