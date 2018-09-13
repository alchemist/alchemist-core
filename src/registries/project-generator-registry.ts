import {IProjectGenerator} from "@/nodegen-shared/generators/iproject-generator";
import {IProject} from "@/nodegen-shared/models/project/iproject";

export class ProjectGeneratorRegistry
{
    private generators: Array<IProjectGenerator> = [];

    public getGeneratorsFor = (project: IProject): Array<IProjectGenerator> => {
        return this.generators.filter(x => x.canHandleType(project));
    };

    public addGenerator = (generator: IProjectGenerator) => {
        if(this.generators.indexOf(generator) >= 0)
        { return; }

        this.generators.push(generator);
    };

    public removeGenerator = (generator: IProjectGenerator) => {
        const index = this.generators.indexOf(generator);

        if(index < 0)
        { return; }

        this.generators.splice(index, 1);
    };
}

export const projectGeneratorRegistry = new ProjectGeneratorRegistry();