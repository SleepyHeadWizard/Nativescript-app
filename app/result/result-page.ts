import { Observable } from '@nativescript/core';
import { EventData, Page, Frame } from '@nativescript/core';

interface Question {
    question: string;
    correctAnswer: string;
    answers: string[];
}

interface QuestionResult {
    questionNumber: number;
    question: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
}

class ResultViewModel extends Observable {
    score: number;
    totalQuestions: number;
    percentage: number;
    congratulatoryMessage: string;
    questionResults: QuestionResult[];

    constructor(score: number, questions: Question[], userAnswers: string[]) {
        super();
        console.log('Initializing ResultViewModel with:', { score, questions, userAnswers });
        
        this.score = score;
        this.totalQuestions = questions.length;
        this.percentage = (score / this.totalQuestions) * 100;
        this.congratulatoryMessage = this.getCongratulatoryMessage();
        this.questionResults = this.buildQuestionResults(questions, userAnswers);
        
        console.log('ResultViewModel initialized:', {
            score: this.score,
            totalQuestions: this.totalQuestions,
            percentage: this.percentage,
            questionResults: this.questionResults
        });
    }

    getCongratulatoryMessage(): string {
        if (this.percentage === 100) {
            return "Perfect Score! 🎉";
        } else if (this.percentage >= 75) {
            return "Great Job! 👏";
        } else {
            return "Keep Practicing! 💪";
        }
    }

    buildQuestionResults(questions: Question[], userAnswers: string[]): QuestionResult[] {
        return questions.map((question, index) => {
            const userAnswer = userAnswers[index] || 'No answer provided';
            const isCorrect = userAnswer === question.correctAnswer;
            
            const result: QuestionResult = {
                questionNumber: index + 1,
                question: question.question,
                userAnswer: `Your Answer: ${userAnswer}`,
                correctAnswer: `Correct Answer: ${question.correctAnswer}`,
                isCorrect: isCorrect
            };
            
            console.log(`Question ${index + 1} result:`, result);
            return result;
        });
    }
}

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const context = page.navigationContext;
    
    console.log('Navigation context:', context);
    
    if (!context || !context.score || !context.questions || !context.userAnswers) {
        console.error('Invalid navigation context:', context);
        alert('Error loading quiz results');
        return;
    }

    page.bindingContext = new ResultViewModel(
        context.score,
        context.questions,
        context.userAnswers
    );
}

export function onRetakeQuizTap() {
    console.log('Retaking quiz...');
    Frame.topmost().navigate({
        moduleName: "cat/cat-page",
        clearHistory: true,
    });
}

export function onBackToHomeTap() {
    console.log('Navigating back to home...');
    Frame.topmost().navigate({
        moduleName: "welcome/welcome-page",
        clearHistory: true,
    });
}