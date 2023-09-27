export enum controlButtons {
    Next = 'next',
    Prev = 'prev',
}

export type RoundResultType = {
    direction: controlButtons,
    checkedQuestion: number
}