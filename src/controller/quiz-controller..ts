import { App } from '../app/app';
import { IRound } from '../data/quiz.data';
import { RoundResultType, controlButtons } from '../types/quiz-types';

export class QuizController {
    data: IRound[];
    answersSet: number[];
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

            const result: RoundResultType = await this.app.addRoundData(
                this.data[this.currentRound],
                this.data.length,
                this.currentRound,
                this.answersSet[this.currentRound]);

            if (result.checkedQuestion > -1) {
                this.answersSet[result.currentRound] = result.checkedQuestion;
            }

            if (this.currentRound === this.data.length - 1 && result.direction === controlButtons.Next) {
                this.app.showResult();
                return;
            }

            if (result.direction === controlButtons.Next) {
                this.currentRound += 1;
                await quiz();
                return;
            }

            if (result.direction === controlButtons.Prev) {
                this.currentRound -= 1;
                await quiz();
                return;
            }

            //0 falsy, а он может прилететь и должен быть валиден, потому провирка такого вида
            // а не if(result.questionNum) {}
            if (typeof result.questionNum === 'number') {
                this.currentRound = result.questionNum;
                await quiz();
                return;
            }
        }
        quiz();
    }

    createAnswersSet = () => {
        return this.data.map(el => -1);
    }
}