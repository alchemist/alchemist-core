import {NodeRegistry} from "@/registries/node-registry";
import {NodeGeneratorRegistry} from "@/registries/node-generator-registry";

export type EntryPoint = (nodeRegistry: NodeRegistry, generatorRegistry: NodeGeneratorRegistry, store: any) => Promise<any>;