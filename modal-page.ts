import { Button, EventData, Page, ShownModallyData, fromObject, TextField, ListPicker } from "@nativescript/core";

export function onShownModally(args: ShownModallyData) {
    const page = <Page>args.object;
    const context = fromObject({
        ...args.context,
        difficulties: ["Any Difficulty", "Easy", "Medium", "Hard"],
        onClose(args: EventData) {
            const button = <Button>args.object;
            const questionCount = (<TextField>page.getViewById("questionCount")).text;
            const difficultyPicker = <ListPicker>page.getViewById("difficultyPicker");
            const selectedDifficultyIndex = difficultyPicker.selectedIndex;

            button.closeModal({
                questionCount: questionCount,
                difficulty: selectedDifficultyIndex
            });
        }
    });
    page.bindingContext = context;
}

export function onSubmitTap(args: EventData) {
    const button = <Button>args.object;
    const page = <Page>button.page;
    page.bindingContext.onClose(args);
}