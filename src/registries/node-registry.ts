import Vue from "vue";
import {INodeFactory} from "../factories/inode-factory";

export class NodeEntry
{
    public constructor(public nodeTypeId: string, public nodeComponent: any, public nodeFactory: INodeFactory, public category = "", public friendlyName = ""){}
}

export class NodeRegistry
{
    private nodes: Array<NodeEntry> = [];

    public addNode = (entry: NodeEntry) => {
        if(this.nodes.indexOf(entry) >= 0)
        { return; }

        this.nodes.push(entry);
    };

    public removeNode = (nodeTypeId: string) => {
        const matchingEntry = this.nodes.find(x => x.nodeTypeId === nodeTypeId);

        if(matchingEntry == null)
        { return; }

        const index = this.nodes.indexOf(matchingEntry);
        this.nodes.splice(index, 1);
    };

    public registerAllNodes = () => {
        this.nodes.forEach(entry => {
            console.log("Registering Node", entry.nodeTypeId);
            Vue.component(entry.nodeTypeId, entry.nodeComponent)
        });
    };

    public getNodes = (category?: string): Array<NodeEntry> => {
        if(!category) { return this.nodes; }
        return this.nodes.filter(x => x.category == category);
    };
}

export const nodeRegistry = new NodeRegistry();