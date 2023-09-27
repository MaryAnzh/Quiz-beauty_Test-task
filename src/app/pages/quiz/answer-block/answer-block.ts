import { Control } from '../../../../utile/control';
import { IRound } from '../../../../data/quiz.data';

export class AnswerBlock extends Control {
    constructor(parent: HTMLElement) {
        super(parent, 'ul', 'answer-block');

    }
}