import { Control } from '../utile/control';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Quiz } from './pages/quiz/quiz';
import { IRound } from '../data/quiz.data';

export class App extends Control {
    private header: Header;
    private main: Control;
    private footer: Footer;
    public quiz: Quiz;


    constructor(parent: HTMLElement) {
        super(parent, 'div', 'wrapper');
        this.header = new Header(this.node);
        this.main = new Control(this.node, 'main', 'main');
        this.footer = new Footer(this.node);
        this.quiz = new Quiz(this.main.node);
    }

    addRoundData = (roundInfo: IRound, questionCount: number, questionNum: number) => {
        this.quiz.addRoundData(roundInfo, questionCount, questionNum);
    }

    showResult = () => {
        this.main.node.textContent = 'Спасибо за ответы';
    }

    destroy(): void {
        super.destroy();
    }
}