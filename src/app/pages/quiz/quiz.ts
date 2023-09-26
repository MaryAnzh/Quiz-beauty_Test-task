import { Control } from '../../../utile/control';
import { quizConst } from './quiz.const';

export class Quiz extends Control {
    private title: Control;
    private description: Control;

    constructor(parent: HTMLElement) {
        super(parent, 'section', 'quiz');
        this.title = new Control(this.node, 'h2', 'quiz__title', quizConst.title);
        this.description = new Control(this.node, 'p', 'quiz__description', quizConst.description);
    }
}
