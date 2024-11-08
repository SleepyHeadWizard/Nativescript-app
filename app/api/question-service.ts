import { decode } from "html-entities";

export async function getQuestions(apiUrl: string): Promise<Question[]> {
    try {
        const apiCall = await fetch(apiUrl);
        const data = await apiCall.json();
        if (data.response_code !== 0) {
            console.error('API error:', data.response_code);
            return [];
        }
        return data.results.map((object, index) => {
            return {
                questionNumber: index,
                question: decodeHtml(object.question),
                answers: object.incorrect_answers.concat(object.correct_answer).sort(),
                correctAnswer: object.correct_answer,
            };
        });
    } catch (error) {
        console.error('Error in getQuestions:', error);
        return [];
    }
}

function decodeHtml(html: string): string {
    return decode(html);
}

export interface Question {
    questionNumber: number;
    question: string;
    answers: string[];
    correctAnswer: string;
}