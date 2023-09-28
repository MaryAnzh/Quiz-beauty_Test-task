import { IProduct, IQuizResult } from '../../../types/result-types';
import { Control } from '../../../utile/control';

import { ItemCard } from './item-card/item-card';


const resultText = {
    title: 'Результат',
    info: 'Мы подобрали для вас наиболее подходящие средства',
    noAnswer: 'Ответ не выбран'
}

export class Result extends Control {
    title: Control;
    resultList: Control;
    info: Control;
    cardsWrap: Control;

    constructor(parent: HTMLElement, results: IQuizResult[], products: IProduct[]) {
        super(parent, 'div', 'result');

        this.title = new Control(this.node, 'h2', 'result__title', resultText.title);
        this.resultList = new Control(this.node, 'ul', 'result__list');
        this.info = new Control(this.node, 'p', 'result__info', resultText.info);

        results.map(({ question, answer }) => {
            const li = new Control(this.resultList.node, 'li', 'result__list__item');
            li.node.innerHTML = `<span>${question}</span> : ${answer ? answer : resultText.noAnswer}`;
        });
        this.cardsWrap = new Control(this.node, 'div', 'result__cards-wrap');
        products.forEach((product) => {
            const card = new ItemCard(this.cardsWrap.node, product);
        });

    }

    destroy(): void {
        super.destroy();
    }
}