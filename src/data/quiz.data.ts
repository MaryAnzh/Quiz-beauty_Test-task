export interface IRound {
    question: string,
    answers: string[]
}

export const quizData: IRound[] = [
    {
        question: 'Сколько вам лет?',
        answers: [
            'Нужны средства для ребёнка младше 10 лет',
            'Мне меньше 25 лет',
            'От 25 до 35 лет',
            'От 35 до 45 лет',
            'Мне больше 45 лет'
        ],
    },
    {
        question: 'Какой у вас тип кожи?',
        answers: [
            'Сухая',
            'Нормальная',
            'Комбинированная',
            'Жирная'
        ],
    },
    {
        question: 'Беспокоят ли воспаления на лице?',
        answers: [
            'Да',
            'Нет',
            'Иногда',
        ],
    },
]