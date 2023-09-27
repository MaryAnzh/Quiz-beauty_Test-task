import { IRound, quizData } from '../../../data/quiz.data';
import { Control } from '../../../utile/control';
import { quizConst } from './quiz.const';
import { Round } from './round/round';
import { AnswerBlock } from './answer-block/answer-block';
import { RoundResultType } from '../../../types/quiz-types';

export class Quiz extends Control {
    private title: Control;
    private description: Control;
    public round: Round;
    public answerBlock: AnswerBlock;

    constructor(parent: HTMLElement) {
        super(parent, 'section', 'quiz');
        this.title = new Control(this.node, 'h2', 'quiz__title', quizConst.title);
        this.description = new Control(this.node, 'p', 'quiz__description', quizConst.description);
        this.round = new Round(this.node);
        this.answerBlock = new AnswerBlock(this.node);
    }

    addRoundData = async (roundInfo: IRound, questionCount: number, questionNum: number, checkedQuestion: number) => {
        const result: RoundResultType = await this.round.addRoundData(roundInfo, questionCount, questionNum, checkedQuestion);
        return result;
    }

    destroy(): void {
        super.destroy();
    }
}
