import {dataType, filterDataType} from "../types/quiz_types"

export const getApiData = async(amount: number, category: number, difficulty: string): Promise<dataType>=>{

   
    const api = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
    const {results}= await api.json();
    const shuffleArray = (arr: string[]) =>
    [...arr].sort(()=> Math.random() - 0.5);

    const filterData: dataType= results.map((item: dataType)=>{
        return {
         question: item.question,
         answer: item.correct_answer,
         options: shuffleArray(item.incorrect_answers.concat(item.correct_answer)),
        }
    });
    
    return filterData; 
}