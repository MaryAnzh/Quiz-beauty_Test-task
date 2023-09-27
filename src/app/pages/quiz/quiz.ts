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
        this.round = new Round(this.node);
    }

    addRoundData = (roundInfo: IRound, questionCount: number, questionNum: number) => {
        this.round.addRoundData(roundInfo, questionCount, questionNum);
    }

    destroy(): void {
        super.destroy();
    }
}
