import { Control } from '../../../../utile/control'
import { IRound } from '../../../../data/quiz.data';
import { quizData } from '../../../../data/quiz.data';

enum ButtonEnum {
    Next = 'Дальше',
    Prev = 'Назад',
    Result = 'Узнать результат',
};

export class Round extends Control {
    infWrap: Control;
    sliderCheckboxes: Control;
    checkboxesSet: HTMLInputElement[] = [];
    questionNumText: Control;
    question: Control;
    answerList: Control;
    answerListSet: HTMLInputElement[] = [];
    buttonsBlock: Control;
    prevButton: Control;
    nextButton: Control;

    constructor(parent: HTMLElement) {
        super(parent, 'div', 'round');

        //block1
        this.infWrap = new Control(this.node, 'div', 'round__info');
        this.sliderCheckboxes = new Control(this.infWrap.node, 'div', 'round__info__slider-checkboxes');
        this.questionNumText = new Control(this.infWrap.node, 'p', 'round__info__question-num-text');
        this.question = new Control(this.infWrap.node, 'p', 'round__info__question', quizData[0].question);
        this.answerList = new Control(this.infWrap.node, 'ul', 'round__info__answer-list');

        //block2
        this.buttonsBlock = new Control(this.node, 'div', 'round__buttons');
        this.prevButton = new Control(this.buttonsBlock.node, 'button', 'round__buttons__prev', ButtonEnum.Prev);
        this.nextButton = new Control(this.buttonsBlock.node, 'button', 'round__buttons__next', ButtonEnum.Next);

        this.createCheckBox(3);
        this.addQuestionNumberText(1, 3);
        this.createAnswerList(quizData[0].answer);
    }

    newRound = (data: IRound, number: number) => {

    }

    createCheckBox = (quantity: number) => {
        [...Array(quantity).keys()].forEach(el => {
            const box = new Control(this.sliderCheckboxes.node, 'div', 'round__info__slider-checkboxes__box');
            const input = new Control(box.node, 'input', 'round__info__slider-checkboxes__box__input', null,
                [
                    { name: 'name', value: 'box' },
                    { name: 'type', value: 'radio' },
                    { name: 'id', value: `box-${el}` }
                ])
            const label = new Control(box.node, 'label', 'round__info__slider-checkboxes__box__label', null, [{ name: 'for', value: `box-${el}` }]);
            const i = <HTMLInputElement>input.node;
            this.checkboxesSet.push(i);
        });
        this.checkboxesSet[0].checked = true;
    }

    checkedBox = (number: number) => {
        this.checkboxesSet[number].checked = true;
    }

    addQuestionNumberText = (questionNum: number, questionCount: number) => {
        this.questionNumText.node.textContent = `Вопрос ${questionNum} из ${questionCount}`;
    }

    createAnswerList = (answers: string[]) => {
        this.answerList.node.innerHTML = '';
        [...Array(answers.length).keys()].forEach((index) => {
            const answer = new Control(this.answerList.node, 'li', 'round__info__answer-list__answer');
            const inputId = `answer_${index}`;
            const input = new Control(answer.node, 'input', 'round__info__answer-list__answer__input', null,
                [
                    { name: 'name', value: 'answer' },
                    { name: 'type', value: 'radio' },
                    { name: 'id', value: inputId }
                ])
            const label = new Control(answer.node, 'label', 'round__info__answer-list__answer__label', null, [{ name: 'for', value: inputId }]);
            label.node.textContent = answers[index];
            const item = <HTMLInputElement>input.node;
            this.answerListSet.push(item);
        });
    }

    destroy(): void {
        super.destroy();
    }
}