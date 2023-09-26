import { Control } from '../utile/control';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Quiz } from './pages/quiz/quiz';
import { Round } from './components/round/round';

export class App extends Control {
    private header: Header;
    private main: Control;
    private footer: Footer;
    private quiz: Quiz;


    constructor(parent: HTMLElement) {
        super(parent, 'div', 'wrapper');
        this.header = new Header(this.node);
        this.main = new Control(this.node, 'main', 'main');
        this.footer = new Footer(this.node);
        this.startGame();
    }

    startGame = () => {
        this.quiz = new Quiz(this.main.node);
    }

    destroy(): void {
        super.destroy();
    }
}