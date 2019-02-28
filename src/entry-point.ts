import {NodeRegistry} from "./registries/node-registry";
import {NodeGeneratorRegistry} from "./registries/node-generator-registry";
import {CodeProcessorRegistry} from "./registries/code-processor-registry";
import {ProjectRegistry} from "./registries/project-registry";
import {ProjectGeneratorRegistry} from "./registries/project-generator-registry";

export interface Paths
{
    root: string,
    plugin: string
}

export interface PluginContext
{
    nodeRegistry: NodeRegistry;
    nodeGeneratorRegistry: NodeGeneratorRegistry;
    codeProcessorRegistry: CodeProcessorRegistry;
    projectRegistry: ProjectRegistry;
    projectGeneratorRegistry: ProjectGeneratorRegistry;
    store: any;
    paths: Paths;
}

export const DefaultOrdering = 100;

export interface IPlugin
{
    name: string;
    version: string;
    order: number;

    setup(pluginContext: PluginContext): Promise<void>;
}

