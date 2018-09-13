import {INodeGenerator} from "@/generators/inode-generator";
import {INode} from "@/models/nodes/inode";

export class NodeGeneratorRegistry
{
    private generators: Array<INodeGenerator> = [];

    public getGeneratorsFor = (node: INode): Array<INodeGenerator> => {
        return this.generators.filter(x => x.canHandleType(node));
    };

    public addGenerator = (generator: INodeGenerator) => {
        if(this.generators.indexOf(generator) >= 0)
        { return; }

        this.generators.push(generator);
    };

    public removeGenerator = (generator: INodeGenerator) => {
        const index = this.generators.indexOf(generator);

        if(index < 0)
        { return; }

        this.generators.splice(index, 1);
    };
}

export const nodeGeneratorRegistry = new NodeGeneratorRegistry();