import { Control } from '../../../../../utile/control';
import { controlButtons } from '../../../../../types/quiz-types';

enum ButtonEnum {
    Next = 'Дальше',
    Prev = 'Назад',
    Result = 'Узнать результат',
};

enum PrevButtonClass {
    Fist = 'quiz-buttons__prev-first',
    Base = 'quiz-buttons__prev',
};

export class QuizButtons extends Control {
    prev: Control;
    next: Control;

    constructor(parent: HTMLElement) {
        super(parent, 'div', 'quiz-buttons');
        this.prev = new Control(this.node, 'button', PrevButtonClass.Fist, ButtonEnum.Prev, [{ name: 'id', value: controlButtons.Prev }]);
        this.next = new Control(this.node, 'button', 'quiz-buttons__next', ButtonEnum.Next, [{ name: 'id', value: controlButtons.Next }]);
    }

    changeButtonsView = (roundNumber: number, questionCount: number) => {
        if (roundNumber === 0) {
            this.firstButtonsPos();
            return;
        }
        if (roundNumber === (questionCount - 1)) {
            this.lastButtonsPos();
            return;
        }
        this.middleButtonsPos();
    }

    firstButtonsPos = () => {
        this.prev.node.className = PrevButtonClass.Fist;
        this.next.node.textContent = ButtonEnum.Next;
    }

    middleButtonsPos = () => {
        this.prev.node.className = PrevButtonClass.Base;
        this.next.node.textContent = ButtonEnum.Next;

    }

    lastButtonsPos = () => {
        this.prev.node.className = PrevButtonClass.Base;
        this.next.node.textContent = ButtonEnum.Result;

    }

    destroy(): void {
        this.node.onclick = null;
        super.destroy();

    }
}