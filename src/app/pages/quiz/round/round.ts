import { Control } from '../../../../utile/control'
import { IRound } from '../../../../data/quiz.data';

export class Round extends Control {
    sliderCheckboxes: Control;
    checkboxesSet: HTMLInputElement[] = [];

    constructor(parent: HTMLElement) {
        super(parent, 'div', 'round');
        this.sliderCheckboxes = new Control(this.node, 'div', 'round__slider-checkboxes');
        [...Array(3).keys()].forEach(el => {
            const box = new Control(this.sliderCheckboxes.node, 'div', 'round__slider-checkboxes__box');
            const input = new Control(box.node, 'input', 'round__slider-checkboxes__box__input', null,
                [
                    { name: 'name', value: 'box' },
                    { name: 'type', value: 'radio' },
                    { name: 'id', value: `box-${el}` }
                ])
            const label = new Control(box.node, 'label', 'round__slider-checkboxes__box__label', null, [{ name: 'for', value: `box-${el}` }]);
            const i = <HTMLInputElement>input.node;
            this.checkboxesSet.push(i);
        });
        this.checkboxesSet[0].checked = true;
    }

    destroy(): void {
        super.destroy();
    }
}