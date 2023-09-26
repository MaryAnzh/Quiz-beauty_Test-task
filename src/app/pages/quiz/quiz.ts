import { IRound, quizData } from '../../../data/quiz.data';
import { Control } from '../../../utile/control';
import { quizConst } from './quiz.const';
import { Round } from './round/round';

export class Quiz extends Control {
    private title: Control;
    private description: Control;
    public round: Round | null = null;

    constructor(parent: HTMLElement) {
        super(parent, 'section', 'quiz');
        this.title = new Control(this.node, 'h2', 'quiz__title', quizConst.title);
        this.description = new Control(this.node, 'p', 'quiz__description', quizConst.description);
        this.showRound(quizData[0]);
    }

    showRound = (data: IRound) => {
        if(!this.round) {
            this.round = new Round(this.node, data);
        }
    }

    destroy(): void {
        super.destroy();
    }
}
