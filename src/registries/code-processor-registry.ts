import {ICodeProcessor} from "../generators/icode-processor";
import {IGeneratedCode} from "../generators/igenerated-code";

export class CodeProcessorRegistry
{
    private processors: Array<ICodeProcessor> = [];

    public getProcessorsFor = (generatedCode: IGeneratedCode): Array<ICodeProcessor> => {
        return this.processors
            .filter(x => x.canHandleType(generatedCode))
            .sort((a,b) => b.order - a.order);
    };

    public addProcessor = (processor: ICodeProcessor) => {
        if(this.processors.indexOf(processor) >= 0)
        { return; }

        this.processors.push(processor);
    };

    public removeProcessor = (processor: ICodeProcessor) => {
        const index = this.processors.indexOf(processor);

        if(index < 0)
        { return; }

        this.processors.splice(index, 1);
    };
}

export const codeProcessorRegistry = new CodeProcessorRegistry();