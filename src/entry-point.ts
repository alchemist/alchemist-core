import {NodeRegistry} from "./registries/node-registry";
import {NodeGeneratorRegistry} from "./registries/node-generator-registry";
import {CodeProcessorRegistry} from "./registries/code-processor-registry";
import {ProjectRegistry} from "./registries/project-registry";
import {ProjectGeneratorRegistry} from "./registries/project-generator-registry";

export interface PluginContext
{
    nodeRegistry: NodeRegistry;
    nodeGeneratorRegistry: NodeGeneratorRegistry;
    codeProcessorRegistry: CodeProcessorRegistry;
    projectRegistry: ProjectRegistry;
    projectGeneratorRegistry: ProjectGeneratorRegistry;
    store: any;
}

export type EntryPoint = (pluginContext: PluginContext) => Promise<any>;