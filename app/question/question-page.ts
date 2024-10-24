import { EventData, Observable } from '@nativescript/core';
import { Page } from '@nativescript/core/ui/page';
import { getQuestions, Question } from './question';

class QuestionViewModel extends Observable {
    questions: Question[] = [];
    currentQuestionIndex: number = 0;
    score: number = 0;
    quizCompleted: boolean = false;

    constructor(category: string, difficulty: string, numberOfQuestions: number) {
        super();
        const allQuestions = getQuestions();
        this.questions = allQuestions.filter(q => 
            q.category === category && 
            q.difficulty === difficulty
        ).slice(0, numberOfQuestions);
        this.notifyPropertyChange("questions", this.questions);
    }

    handleAnswer(selectedOption: string) {
        if (selectedOption === this.questions[this.currentQuestionIndex].correct_answer) {
            this.score++;
        }
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
        } else {
            this.quizCompleted = true;
        }
        this.notifyPropertyChange("currentQuestionIndex", this.currentQuestionIndex);
        this.notifyPropertyChange("quizCompleted", this.quizCompleted);
    }
}

let viewModel: QuestionViewModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const context = page.navigationContext;
    viewModel = new QuestionViewModel(context.category, context.difficulty, context.numberOfQuestions);
    page.bindingContext = viewModel;
}

export function onSubmitTap(args: EventData) {
    const navigationEntry = {
        moduleName: "result-page",
        context: {
            score: viewModel.score,
            totalQuestions: viewModel.questions.length
        }
    };
    const page = <Page>args.object;
    page.frame.navigate(navigationEntry);
}