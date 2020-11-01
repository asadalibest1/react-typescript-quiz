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

export type ACTION_TYPE =
|{type: "ADD_CAT", payload: number}
|{type: "ADD_CAT_NAME", payload: string}
|{type: "ADD_DIFF", payload: string}
|{type: "ADD_AMOUNT", payload: number}
|{type: "CHANGE_PAGE", payload: number}
|{type: "ADD_TOTALNUM", payload: number}
