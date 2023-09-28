import { Control } from '../../../utile/control';

const resultText = {
    title: 'Результат',
    info: 'Мы подобрали для вас наиболее подходящие средства'
}

export class Result extends Control {
    constructor(parent: HTMLElement) {
        super(parent, 'div', 'result');
    }

    destroy(): void {
        super.destroy();
    }
}