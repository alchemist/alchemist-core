import {IProject} from "@/models/project/iproject";
import {ProjectState} from "@/stores/modules/project/project-state";

export class ProjectMutations
{
    public loadProject = (state: ProjectState, project: IProject): void =>
    { state.activeProject = project; };
}