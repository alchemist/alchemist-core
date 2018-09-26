import {ProjectState} from "./project-state";

export class ProjectGetters
{
    public hasLoadedProject = (state: ProjectState, getters: any, rootState: any): boolean =>
    { return state.activeProject != null; };
}