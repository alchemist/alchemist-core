import {INodeGroupFactory} from "../factories/inode-group-factory";

export class NodeGroupEntry
{
    public constructor(public nodeGroupTypeId: string, public nodeGroupFactory: INodeGroupFactory, public friendlyName = ""){}
}

export class NodeGroupRegistry
{
    private nodeGroups: Array<NodeGroupEntry> = [];

    public addNodeGroup = (entry: NodeGroupEntry) => {
        if(this.nodeGroups.indexOf(entry) >= 0)
        { return; }

        this.nodeGroups.push(entry);
    };

    public removeNodeGroup = (nodeGroupTypeId: string) => {
        const matchingEntry = this.nodeGroups.find(x => x.nodeGroupTypeId === nodeGroupTypeId);

        if(matchingEntry == null)
        { return; }

        const index = this.nodeGroups.indexOf(matchingEntry);
        this.nodeGroups.splice(index, 1);
    };

    public getNodeGroups = (): Array<NodeGroupEntry> => {
        return this.nodeGroups;
    };
}

export const nodeGroupRegistry = new NodeGroupRegistry();