import { EventData } from '@nativescript/core';
import { Frame } from '@nativescript/core/ui/frame';

export function goToQuestionPage(args: EventData) {
  const navigationEntry = {
    moduleName: "question/question-page",
    clearHistory: true
  };
  Frame.topmost().navigate(navigationEntry);
}