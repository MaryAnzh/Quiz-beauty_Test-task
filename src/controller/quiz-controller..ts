import { App } from '../app/app';
import { IRound } from '../data/quiz.data';

export class QuizController {
    data: IRound[];
    app: App | null = null;
    currentRound = 2;

    constructor(data: IRound[]) {
        this.data = data
    }

    showApp = () => {
        const body = <HTMLElement>document.querySelector('body');
        if (!this.app) {
            this.app = new App(body);
        }
        this.app.addRoundData(this.data[this.currentRound], this.data.length, this.currentRound);
    }
}