import { Control } from '../utile/control';
import { IRound } from '../data/quiz.data';
import { IQuizResult } from '../types/result-types';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Quiz } from './pages/quiz/quiz';
import { Result } from './pages/result/result';

export class App extends Control {
    private header: Header;
    private main: Control;
    private footer: Footer;
    private quiz: Quiz;
    private result: Result | null = null;

    constructor(parent: HTMLElement) {
        super(parent, 'div', 'wrapper');
        this.header = new Header(this.node);
        this.main = new Control(this.node, 'main', 'main');
        this.footer = new Footer(this.node);
        this.quiz = new Quiz(this.main.node);
    }

    addRoundData = (roundInfo: IRound, questionCount: number, questionNum: number, checkedQuestion: number) => {
        return this.quiz.addRoundData(roundInfo, questionCount, questionNum, checkedQuestion);
    }

    showResult = (results: IQuizResult[]) => {
        this.quiz.destroy();
        this.result = new Result(this.main.node, results);
    }

    destroy(): void {
        super.destroy();
    }
}