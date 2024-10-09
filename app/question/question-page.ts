import { EventData } from '@nativescript/core';
import { Page } from '@nativescript/core/ui/page';
import { Http } from '@nativescript/core';
import { RadioGroup } from '@nativescript/core';


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
      correctAnswer: correctAnswer
    };
  });
}

export function submitAnswer(args: EventData) {
  const page = <Page>(<any>args.object).page;
  const radioGroup = <RadioGroup>page.getViewById("radioGroup");
  const selectedIndex = radioGroup.selectedIndex;
  const selectedAnswer = page.bindingContext.answers[selectedIndex];

  if (selectedAnswer === page.bindingContext.correctAnswer) {
    console.log("Correct answer!");
  } else {
    console.log("Incorrect answer.");
  }

  // Perform any additional actions, such as navigation or showing a message
}