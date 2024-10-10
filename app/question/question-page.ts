import { EventData, Observable } from '@nativescript/core';
import { Page } from '@nativescript/core/ui/page';
import { ItemEventData } from '@nativescript/core/ui/list-view';
import * as Https from '@nativescript-community/https';

class QuestionViewModel extends Observable {
    questions: any[] = [];
    currentQuestionIndex: number = 0;
    currentQuestion: string = "";
    currentAnswers: any[] = [];

    constructor() {
        super();
    }

    fetchQuestions(category: number, amount: number, difficulty: string) {
        const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
        console.log(`Fetching questions from URL: ${url}`); // Debugging
        Https.request({
            url: url,
            method: 'GET'
        }).then((response: any) => {
            const data = response.content.toJSON();
            console.log('API Response:', data); // Debugging
            if (data.response_code === 0) {
                this.questions = data.results;
                this.setCurrentQuestion();
            } else {
                console.error('Error: Invalid response code', data.response_code);
            }
        }).catch((error) => {
            console.error('Error fetching questions:', error);
        });
    }

    setCurrentQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            const question = this.questions[this.currentQuestionIndex];
            this.currentQuestion = question.question;
            this.currentAnswers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);
            console.log('Current Question:', this.currentQuestion); // Debugging
            console.log('Current Answers:', this.currentAnswers); // Debugging
            this.notifyPropertyChange("currentQuestion", this.currentQuestion);
            this.notifyPropertyChange("currentAnswers", this.currentAnswers);
        } else {
            console.log('No more questions available'); // Debugging
        }
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.setCurrentQuestion();
    }
}

let viewModel: QuestionViewModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    viewModel = new QuestionViewModel();
    page.bindingContext = viewModel;

    const context = page.navigationContext;
    console.log('Navigation Context:', context); // Debugging
    viewModel.fetchQuestions(context.category, context.numberOfQuestions, context.difficulty);
}

export function onAnswerTap(args: ItemEventData) {
    const selectedAnswer = viewModel.currentAnswers[args.index];
    console.log('Selected Answer:', selectedAnswer); // Debugging
    // Handle answer selection logic here
}

export function onNextTap() {
    console.log('Next button tapped'); // Debugging
    viewModel.nextQuestion();
}