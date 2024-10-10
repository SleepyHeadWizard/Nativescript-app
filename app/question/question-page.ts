import { Button, EventData } from '@nativescript/core';
import { Page } from '@nativescript/core/ui/page';
import { Http } from '@nativescript/core';

export function onNavigatingTo(args: EventData) {
  const page = <Page>args.object;
  
  // Fetch a question from the Open Trivia Database API
  Http.getJSON("https://opentdb.com/api.php?amount=1&type=multiple").then((response: any) => {
    const questionData = response.results[0];
    const question = questionData.question;
    const correctAnswer = questionData.correct_answer;
    const incorrectAnswers = questionData.incorrect_answers;
    const answers = [...incorrectAnswers, correctAnswer].sort(() => Math.random() - 0.5);

    page.bindingContext = {
      question: question,
      answers: answers,
      correctAnswer: correctAnswer,
      selectedIndex: -1 // Initialize selected index
    };
  });
}

export function selectAnswer(args: EventData) {
  const button = <Button>args.object;
  const page = <Page>button.page;
  const selectedIndex = page.bindingContext.answers.indexOf(button.text);
  page.bindingContext.selectedIndex = selectedIndex;

  // Update button styles to indicate selection
  const buttonGroup = page.getViewById("buttonGroup");
  buttonGroup.eachChild((child) => {
    if (child.className.includes("selected")) {
      child.className = child.className.replace(" selected", "");
    }
    if (child === button) {
      child.className += " selected";
    }
    return true;
  });
}

export function submitAnswer(args: EventData) {
  const page = <Page>(<any>args.object).page;
  const selectedIndex = page.bindingContext.selectedIndex;
  const selectedAnswer = page.bindingContext.answers[selectedIndex];

  if (selectedAnswer === page.bindingContext.correctAnswer) {
    console.log("Correct answer!");
  } else {
    console.log("Incorrect answer.");
  }

  // Perform any additional actions, such as navigation or showing a message
  // For example, navigate to a results page or show a dialog
}