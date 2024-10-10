import { Observable, EventData, Page } from "@nativescript/core";
import { Frame } from "@nativescript/core/ui/frame";

class ResultViewModel extends Observable {
    data = [];
    score = 0;

    constructor(data: any[], score: number) {
        super();
        this.data = data;
        this.score = score;
    }
}

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const context = page.navigationContext;
    page.bindingContext = new ResultViewModel(context.data, context.score);
}

export function onRestartTap(args: EventData) {
    Frame.topmost().navigate({
        moduleName: "cat/cat-page",
        clearHistory: true
    });
}