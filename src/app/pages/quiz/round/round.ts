import { Control } from '../../../../utile/control'
import { IRound } from '../../../../data/quiz.data';
import { QuizButtons } from './buttons/buttons';
import { controlButtons, RoundResultType } from '../../../../types/quiz-types';


export class Round extends Control {
    questionCount = 0;
    infWrap: Control;
    sliderCheckboxes: Control;
    checkboxesSet: HTMLInputElement[] = [];
    questionNumText: Control;
    question: Control;
    answerList: Control;
    answerListSet: HTMLInputElement[] = [];
    buttonsBlock: QuizButtons;
    prevButton: Control;
    nextButton: Control;

    constructor(parent: HTMLElement) {
        super(parent, 'div', 'round');

        //block1
        this.infWrap = new Control(this.node, 'div', 'round__info');
        this.sliderCheckboxes = new Control(this.infWrap.node, 'div', 'round__info__slider-checkboxes');
        this.questionNumText = new Control(this.infWrap.node, 'p', 'round__info__question-num-text');
        this.question = new Control(this.infWrap.node, 'p', 'round__info__question');
        this.answerList = new Control(this.infWrap.node, 'ul', 'round__info__answer-list');

        //block2
        this.buttonsBlock = new QuizButtons(this.node);
    }

    addRoundData = (roundData: IRound, questionCount: number, questionIndex: number): Promise<RoundResultType> => {
        if (this.questionCount === 0) {
            this.questionCount = questionCount;
        }
        const questionNum = questionIndex + 1;

        if (this.checkboxesSet.length === 0) {
            this.createCheckBox(questionCount);
        } else {
            this.checkedSliderInput(questionIndex);
        }

        this.addQuestionNumberText(questionNum, questionCount);
        this.question.node.textContent = roundData.question;
        this.createAnswerList(roundData.answers);
        this.buttonsBlock.changeButtonsView(questionIndex, questionCount);

        return new Promise((res) => {
            this.buttonsBlock.node.onclick = (e) => {
                const el = <HTMLElement>e.target;
                let direction = '';
                if (el.id !== controlButtons.Next && el.id !== controlButtons.Prev) {
                    direction = controlButtons.Next;
                    console.log('Неверный id');
                    return;
                }

                const round: controlButtons = el.id === controlButtons.Prev ? controlButtons.Prev : controlButtons.Next;
                const checkedElem = this.answerListSet.reduce((checked: number, el: HTMLInputElement, i: number) => {
                    if (el.checked) {
                        checked = i;
                    }
                    return checked;
                }, -1);
                const result: RoundResultType = {
                    direction: round,
                    checkedQuestion: checkedElem,
                }

                res(result);
            }
        });
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

    checkedSliderInput = (number: number) => {
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

    removeRoundData = () => {

    }

    destroy(): void {
        super.destroy();
        this.buttonsBlock.destroy();
    }
}