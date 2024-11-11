import { EventData, Observable, ItemEventData, View } from '@nativescript/core';
import { Page, Frame } from '@nativescript/core';
import { getQuestions, Question } from '../api/question-service';

class QuestionViewModel extends Observable {
    questions: Question[] = [];
    currentQuestionIndex: number = 0;
    score: number = 0;
    quizCompleted: boolean = false;
    selectedOption: string | null = null;
    userAnswers: string[] = [];

    constructor(categoryId: number, difficulty: string, numberOfQuestions: number) {
        super();
        this.loadQuestions(categoryId, difficulty, numberOfQuestions);
    }

    async loadQuestions(categoryId: number, difficulty: string, numberOfQuestions: number) {
        try {
            console.log(`Fetching questions for category ID: ${categoryId}, difficulty: ${difficulty}, number of questions: ${numberOfQuestions}`);

            // Build the API URL
            const apiUrl = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
            console.log(`API URL: ${apiUrl}`);

            this.questions = await getQuestions(apiUrl);

            if (this.questions.length === 0) {
                console.error('No questions fetched from API');
                alert('No questions available for the selected options.');
            } else {
                console.log('Questions fetched:', this.questions);
                this.notifyPropertyChange("questions", this.questions);
                this.notifyPropertyChange("currentQuestionIndex", this.currentQuestionIndex);
            }
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    }

    handleOptionSelect(args: ItemEventData) {
        const selectedIndex = args.index;
        this.selectedOption = this.questions[this.currentQuestionIndex].answers[selectedIndex];
        console.log('Selected option:', this.selectedOption);

        // Record the user's answer
        this.userAnswers[this.currentQuestionIndex] = this.selectedOption;

        if (this.selectedOption === this.questions[this.currentQuestionIndex].correctAnswer) {
            this.score++;
        }

        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.selectedOption = null;
            this.notifyPropertyChange("currentQuestionIndex", this.currentQuestionIndex);
            this.notifyPropertyChange("selectedOption", this.selectedOption);
        } else {
            this.quizCompleted = true;
            this.notifyPropertyChange("quizCompleted", this.quizCompleted);
        }
        console.log('Current score:', this.score);
    }

    handleSubmit() {
        const navigationEntry = {
            moduleName: "result/result-page",
            context: {
                score: this.score,
                questions: this.questions,
                userAnswers: this.userAnswers
            },
            clearHistory: true
        };
        Frame.topmost().navigate(navigationEntry);
    }
}

export function onNavigatingTo(args: EventData) {
    const page = args.object as Page;
    const context = page.navigationContext;
    console.log('Navigating to question page with context:', context);
    page.bindingContext = new QuestionViewModel(context.categoryId, context.difficulty, context.numberOfQuestions);
}

// Exported functions for event handlers
export function handleOptionSelect(args: ItemEventData) {
    const view = args.view as View;
    const page = view.page as Page;
    const viewModel = page.bindingContext as QuestionViewModel;
    viewModel.handleOptionSelect(args);
}

export function handleSubmit(args: EventData) {
    const view = args.object as View;
    const page = view.page as Page;
    const viewModel = page.bindingContext as QuestionViewModel;
    viewModel.handleSubmit();
}