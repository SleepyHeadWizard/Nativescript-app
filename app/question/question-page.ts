import { EventData, Observable } from '@nativescript/core';
import { Page } from '@nativescript/core/ui/page';
import { Frame } from '@nativescript/core/ui/frame';
import * as fs from '@nativescript/core/file-system';
import { knownFolders } from '@nativescript/core/file-system';

class QuestionViewModel extends Observable {
    questions: any[];
    currentQuestionIndex: number = 0;

    constructor(questions: any[]) {
        super();
        this.questions = questions;
        this.notifyPropertyChange("currentQuestion", this.questions[this.currentQuestionIndex]);
    }

    get currentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.notifyPropertyChange("currentQuestion", this.questions[this.currentQuestionIndex]);
        } else {
            // Navigate to result page or show a message
        }
    }
}

let viewModel: QuestionViewModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const context = page.navigationContext;

    const documents = knownFolders.currentApp();
    const file = documents.getFile('app/question/question.json');

    file.readText().then((content) => {
        const questions = JSON.parse(content);
        const filteredQuestions = questions.filter(q => 
            q.category === context.category && 
            q.difficulty === context.difficulty
        ).slice(0, context.numberOfQuestions);

        viewModel = new QuestionViewModel(filteredQuestions);
        page.bindingContext = viewModel;
    });
}

export function onNextTap() {
    viewModel.nextQuestion();
}