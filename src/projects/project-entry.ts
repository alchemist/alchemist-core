import {IProjectFactory} from "../factories/iproject-factory";
import {IProjectDescriptor} from "../models/project/iproject-descriptor";
import {IProjectSerializer} from "./iproject-serializer";

export class ProjectEntry
{
    public constructor(public projectDescriptor: IProjectDescriptor, public projectFactory: IProjectFactory, public projectSerializer: IProjectSerializer){}
}