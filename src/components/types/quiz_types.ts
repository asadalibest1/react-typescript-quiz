export type dataType ={
        category: string,
        correct_answer: string,
        difficulty: string,
        incorrect_answers: string[],
        question: string,
        type: string,
};

export type filterDataType ={
        question: string,
        answer: string,
        options: string[],
}