import { Button, EventData, ListPicker, Page, ShowModalOptions } from "@nativescript/core";
import { Frame } from "@nativescript/core/ui/frame";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = {
        items: [
            "General Knowledge",
            "Entertainment: Books",
            "Entertainment: Film",
            "Entertainment: Music",
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
                const category = selectedCategoryIndex + 9; // Adjust based on your category list
                const difficulty = ["easy", "medium", "hard"][result.difficulty];
                const amount = result.questionCount;

                const apiUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

                Frame.topmost().navigate({
                    moduleName: "question/question-page",
                    context: { apiUrl: apiUrl }
                });
            }
        },
        fullscreen: true
    };

    page.showModal("modal-page", options);
}