import {IProject} from "../../..//models/project/iproject";
import {ProjectState} from "./project-state";

export class ProjectMutations
{
    public loadProject = (state: ProjectState, project: IProject): void =>
    { state.activeProject = project; };
}