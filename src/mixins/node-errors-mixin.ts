import {RulesetOptions, ValidateWith} from "treacherous-vue";
import {createNodeRuleset} from "@/components/helpers/node-ruleset-helpers";

const defaultOptions: RulesetOptions = {
    validateOnStart: true,
    validateProps: true,
    withReactiveValidation: true
};

export function ValidateNode(nodeType: any, options: RulesetOptions = defaultOptions) {
    const validationMixin = ValidateWith(createNodeRuleset(nodeType), options);

    if(validationMixin.watch == null)
    { validationMixin.watch = <any>{}; }

    validationMixin.watch.isValid = function() {
        this.$store.commit("updateNodeErrors", { nodeId: this.node.id, errors: this.modelErrors });
    };

    return validationMixin;
};