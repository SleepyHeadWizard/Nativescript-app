import { Observable, Page, EventData, Http } from "@nativescript/core";
import { Frame } from "@nativescript/core/ui/frame";

class QuestionViewModel extends Observable {
    data = [];
    currentQuestion = { question: "", category: "", difficulty: "" };
    number = 0;
    score = 0;
    timerSeconds = "00";
    timerMinutes = "00";
    secondsElapsed = 0;
    incrementer: any;
    apiUrl: '' ;

    constructor(apiUrl: string) {
        super();
        this.fetchQuestions(apiUrl);
        this.startTimer();
    }

    fetchQuestions(apiUrl: string) {
        Http.getJSON(apiUrl)
            .then((response: any) => {
                this.data = response.results;
                this.setCurrentQuestion();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    setCurrentQuestion() {
        if (this.number < this.data.length) {
            this.currentQuestion = this.data[this.number];
            this.notifyPropertyChange("currentQuestion", this.currentQuestion);
        } else {
            this.finishQuiz();
        }
    }

    onAnswerTrue() {
        this.checkAnswer(true);
    }

    onAnswerFalse() {
        this.checkAnswer(false);
    }

    checkAnswer(answer: boolean) {
        const correctAnswer = this.data[this.number].correct_answer === "True";
        if (answer === correctAnswer) {
            this.score += 1;
        }

        this.number += 1;
        this.notifyPropertyChange("number", this.number);
        this.setCurrentQuestion();
    }

    startTimer() {
        this.incrementer = setInterval(() => {
            this.secondsElapsed += 1;
            this.timerMinutes = Math.floor(this.secondsElapsed / 60).toString().padStart(2, "0");
            this.timerSeconds = (this.secondsElapsed % 60).toString().padStart(2, "0");
            this.notifyPropertyChange("timerMinutes", this.timerMinutes);
            this.notifyPropertyChange("timerSeconds", this.timerSeconds);
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.incrementer);
    }

    finishQuiz() {
        this.stopTimer();
        Frame.topmost().navigate({
            moduleName: "result/result-page",
            context: { data: this.data, score: this.score }
        });
    }
}

// onNavigatingTo event handler
export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const apiUrl = page.navigationContext.apiUrl;
    page.bindingContext = new QuestionViewModel(apiUrl);
}