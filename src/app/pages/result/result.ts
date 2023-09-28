import { IQuizResult } from '../../../types/result-types';
import { Control } from '../../../utile/control';

const resultText = {
    title: 'Результат',
    info: 'Мы подобрали для вас наиболее подходящие средства',
    noAnswer: 'Ответ не выбран'
}

export class Result extends Control {
    title: Control;
    resultList: Control;
    info: Control;

    constructor(parent: HTMLElement, results: IQuizResult[]) {
        super(parent, 'div', 'result');

        this.title = new Control(this.node, 'h2', 'result__title', resultText.title);
        this.resultList = new Control(this.node, 'ul', 'result__list');
        this.info = new Control(this.node, 'p', 'result__info', resultText.info);

        results.map(({ question, answer }) => {
            const li = new Control(this.resultList.node, 'li', 'result__list__item');
            li.node.innerHTML = `<span>${question}</span> : ${answer ? answer : resultText.noAnswer}`;
        });
    }

    destroy(): void {
        super.destroy();
    }
}