export enum controlButtons {
    Next = 'next',
    Prev = 'prev',
}

export type RoundResultType = {
    direction?: controlButtons,
    questionNum?: number,
    checkedQuestion: number,
    currentRound: number
}