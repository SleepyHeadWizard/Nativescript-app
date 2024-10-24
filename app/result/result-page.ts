import { EventData, Observable } from '@nativescript/core';
import { Page } from '@nativescript/core/ui/page';

class ResultViewModel extends Observable {
    score: number;
    totalQuestions: number;

    constructor(score: number, totalQuestions: number) {
        super();
        this.score = score;
        this.totalQuestions = totalQuestions;
    }
}

let viewModel: ResultViewModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const context = page.navigationContext;
    viewModel = new ResultViewModel(context.score, context.totalQuestions);
    page.bindingContext = viewModel;
}

export function onRetakeQuizTap(args: EventData) {
    const page = <Page>args.object;
    page.frame.navigate("category-page");
}