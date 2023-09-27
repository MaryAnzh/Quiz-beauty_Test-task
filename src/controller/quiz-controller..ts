import { App } from '../app/app';
import { IRound } from '../data/quiz.data';
import { RoundResultType, controlButtons } from '../types/quiz-types';


export class QuizController {
    data: IRound[];
    answersSet: boolean[][] = [];
    app: App | null = null;
    currentRound = 0;

    constructor(data: IRound[]) {
        this.data = data;
        this.answersSet = this.createAnswersSet();
    }

    showApp = async () => {
        const body = <HTMLElement>document.querySelector('body');
        if (!this.app) {
            this.app = new App(body);
        }

        const quiz = async () => {
            const result: RoundResultType = await this.app.addRoundData(this.data[this.currentRound], this.data.length, this.currentRound);
            console.log(result)
            if (this.currentRound === this.data.length - 1 && result.direction === controlButtons.Next) {
                this.app.showResult();
                return;
            }
            if (result.direction === controlButtons.Next) {
                this.currentRound += 1;
                await quiz();
            }
            if (result.direction === controlButtons.Prev) {
                this.currentRound -= 1;
                await quiz();
            }
        }
        await quiz();
    }

    createAnswersSet = () => {
        return this.data.map(({ answers }) => {
            return answers.map((el) => false);
        });
    }
}