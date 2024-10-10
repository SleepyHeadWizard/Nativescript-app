import { Button, EventData, ListPicker, Page, PropertyChangeData, ShowModalOptions } from "@nativescript/core";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = {
        items: [
            "General Knowledge",
            "Entertainment: Books",
            "Entertainment: Film",
            "Entertainment: Music",
            "Entertainment: Musicals & Theatres",
            "Entertainment: Television",
            "Entertainment: Video Games",
            "Entertainment: Board Games",
            "Science & Nature",
            "Science: Computers",
            "Science: Mathematics",
            "Mythology",
            "Sports",
            "Geography",
            "History",
            "Politics",
            "Art",
            "Celebrities",
            "Animals",
            "Vehicles",
            "Entertainment: Comics",
            "Science: Gadgets",
            "Entertainment: Japanese Anime & Manga",
            "Entertainment: Cartoon & Animations"
        ]
    };
}

export function onNextTap(args: EventData) {
    const button = <Button>args.object;
    const page = <Page>button.page;
    const categoryPicker = <ListPicker>page.getViewById("categoryPicker");
    const selectedCategoryIndex = categoryPicker.selectedIndex;

    const options: ShowModalOptions = {
        context: { category: selectedCategoryIndex },
        closeCallback: (result) => {
            if (result) {
                console.log(`Number of Questions: ${result.questionCount}`);
                console.log(`Selected Difficulty: ${result.difficulty}`);
            }
        },
        fullscreen: true
    };

    page.showModal("modal-page", options);
}

export function onSelectedIndexChange(args: PropertyChangeData) {
    const picker = <ListPicker>args.object;
    console.log('selectedIndex changed to', args.value);
}