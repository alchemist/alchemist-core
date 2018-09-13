import {createRulesetFor} from "treacherous-decorators";
import {createRuleset} from "treacherous";

export const createNodeRuleset = (node: any) => {
    const nodeRuleset = createRulesetFor(node);
    return createRuleset()
        .forProperty("node")
        .addRuleset(nodeRuleset)
        .build();
};

