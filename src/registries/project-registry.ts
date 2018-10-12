import {IProjectFactory} from "../factories/iproject-factory";
import {IProjectDescriptor} from "../models/project/iproject-descriptor";

export class ProjectEntry
{
    public constructor(public projectDescriptor: IProjectDescriptor, public projectFactory: IProjectFactory){}
}

export class ProjectRegistry
{
    private projects: Array<ProjectEntry> = [];

    public addProject = (entry: ProjectEntry) => {
        if(this.projects.indexOf(entry) >= 0)
        { return; }

        console.log("Registering Project", entry.projectDescriptor.projectType);
        this.projects.push(entry);
    };

    public removeProject = (projectTypeId: string) => {
        const matchingEntry = this.getProject(projectTypeId);

        if(matchingEntry == null)
        { return; }

        const index = this.projects.indexOf(matchingEntry);
        this.projects.splice(index, 1);
    };

    public getProject = (projectTypeId: string): ProjectEntry => {
        return this.projects.find(x => x.projectDescriptor.projectType == projectTypeId);
    };

    public getProjects = () : Array<ProjectEntry> => {
        return this.projects;
    }
}

export const projectRegistry = new ProjectRegistry();