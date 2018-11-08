import {ProjectState} from "./project-state";
import {INode} from "../../../models/nodes/inode";
import {INodeGroup} from "../../../models/project/inode-group";

export class ProjectGetters
{
    public hasLoadedProject = (state: ProjectState, getters: any, rootState: any): boolean =>
    { return state.activeProject != null; };

    public allNodes = (state: any, getters: any, rootState: any, rootGetters: any): Array<INode> =>
    {
        const nodeList = [];
        if(rootState.project.activeProject == null)
        { return nodeList; }

        const activeProject = rootState.project.activeProject;
        activeProject.nodeGroups.forEach((nodeGroup: INodeGroup) => {
            if(!nodeGroup){ return; }
            nodeGroup.nodes.forEach(nodeList.push);
        });

        return nodeList;
    }
}