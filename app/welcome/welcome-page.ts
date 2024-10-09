import { EventData } from '@nativescript/core';
import { Page } from '@nativescript/core/ui/page';
import { Frame } from '@nativescript/core/ui/frame';

export function onNavigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = {};

  setTimeout(() => {
    Frame.topmost().navigate({
      moduleName: "login-page",
      clearHistory: true
    });
  }, 2000); // 2 seconds delay
}