export interface IProjectDescriptor
{
    projectCategory: string;

    projectType: string;
    version: string;

    tagName: string;
    title: string;
    description: string;

    compatibleNodeTypeIds: string[];
}