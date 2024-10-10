import { EventData, Observable } from '@nativescript/core';
import { Page } from '@nativescript/core/ui/page';
import { Frame } from '@nativescript/core/ui/frame';

class CategoryViewModel extends Observable {
    categories: { id: number, name: string }[] = [
        { id: 9, name: "General Knowledge" },
        { id: 10, name: "Entertainment: Books" },
        { id: 11, name: "Entertainment: Film" },
        { id: 12, name: "Entertainment: Music" },
        { id: 13, name: "Entertainment: Musicals & Theatres" },
        { id: 14, name: "Entertainment: Television" },
        { id: 15, name: "Entertainment: Video Games" },
        { id: 16, name: "Entertainment: Board Games" },
        { id: 17, name: "Science & Nature" },
        { id: 18, name: "Science: Computers" },
        { id: 19, name: "Science: Mathematics" },
        { id: 20, name: "Mythology" },
        { id: 21, name: "Sports" },
        { id: 22, name: "Geography" },
        { id: 23, name: "History" },
        { id: 24, name: "Politics" },
        { id: 25, name: "Art" },
        { id: 26, name: "Celebrities" },
        { id: 27, name: "Animals" },
        { id: 28, name: "Vehicles" },
        { id: 29, name: "Entertainment: Comics" },
        { id: 30, name: "Science: Gadgets" },
        { id: 31, name: "Entertainment: Japanese Anime & Manga" },
        { id: 32, name: "Entertainment: Cartoon & Animations" }
    ];
    categoryNames: string[] = this.categories.map(category => category.name);
    numberOfQuestions: number[] = [5, 10, 15, 20, 25, 30];
    difficulties: string[] = ["Easy", "Medium", "Hard"];
    selectedCategoryIndex: number = 0;
    selectedNumberOfQuestionsIndex: number = 0;
    selectedDifficultyIndex: number = 0;

    constructor() {
        super();
        this.notifyPropertyChange("categoryNames", this.categoryNames);
        this.notifyPropertyChange("numberOfQuestions", this.numberOfQuestions);
        this.notifyPropertyChange("difficulties", this.difficulties);
    }
}

let viewModel: CategoryViewModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    viewModel = new CategoryViewModel();
    page.bindingContext = viewModel;
}

export function onSelectedIndexChange(args: EventData) {
    const picker = <any>args.object;
    const id = picker.id;

    if (id === "categoryPicker") {
        viewModel.selectedCategoryIndex = picker.selectedIndex;
    } else if (id === "numberOfQuestionsPicker") {
        viewModel.selectedNumberOfQuestionsIndex = picker.selectedIndex;
    } else if (id === "difficultyPicker") {
        viewModel.selectedDifficultyIndex = picker.selectedIndex;
    }
}

export function onNextTap() {
    const selectedCategory = viewModel.categories[viewModel.selectedCategoryIndex];
    const selectedNumberOfQuestions = viewModel.numberOfQuestions[viewModel.selectedNumberOfQuestionsIndex];
    const selectedDifficulty = viewModel.difficulties[viewModel.selectedDifficultyIndex];

    const navigationEntry = {
        moduleName: "question/question-page",
        context: {
            category: selectedCategory.id,
            numberOfQuestions: selectedNumberOfQuestions,
            difficulty: selectedDifficulty
        },
        clearHistory: true
    };

    Frame.topmost().navigate(navigationEntry);
}