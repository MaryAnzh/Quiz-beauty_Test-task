export interface IQuizResult {
    question: string,
    answer: string
}

export interface IProduct {
    id: number,
    title: string,
    image: string,
    price: number,
    oldPrice: number | null,
}