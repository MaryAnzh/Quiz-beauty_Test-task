import { Control } from '../../../../utile/control'
import { IRound } from '../../../../data/quiz.data';

export class Round extends Control {
    constructor(parent: HTMLElement, data: IRound) {
        super(parent, 'div', 'round');
    }
}