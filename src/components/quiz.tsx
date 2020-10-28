import React from 'react'
import "../css/quiz.css"
import "../css/quizButtons.scss"
import {getApiData} from "./Api/api"
import {filterDataType} from "./types/quiz_types"
import {State} from "./store/store"


export default function Quiz() {
    const [getData, setData] = React.useState<filterDataType[]>([]);
    const [QuestionNo, setQuestionNo] = React.useState(0);

    const {data} = React.useContext(State);
    const {category, difficulty, amount, fetchCondition} = data;

    React.useEffect(()=>{
        function animate(){
         const paper: any = document.querySelector(".paper");
     const Animate = paper.animate([
        {opacity: "1"},
         // {transform: "translate(-1000px, 0)"},
     ],{
         duration: 400,
         iterations: 1,
     }
     )
     Animate.onfinish = ()=> paper.style.opacity= "1";
     }
        animate();
    
        const fetchData = async ()=>{
            var Data: any= await getApiData(amount, category, difficulty);
            setData(Data);
        }
        fetchData();
         },[])

const changeQuiz = ()=>{
    (QuestionNo !== (getData.length -1)) ?
        setQuestionNo(QuestionNo + 1)
        :
        alert("Quiz Finished");
    }
const selectOption =(id: any)=>{
    const _id: any = document.getElementById(id);
    alert(_id.innerText);
    // alert(id);
}
let optionNum = 0;
    return (
        <div className="main-quiz-div">
            <div className="paper">
            {/* {console.log(data)} */}
                {
                (!getData.length) ?
                    <h1>Loading....</h1>
                :
                        <>
                            <h2>Question # {QuestionNo + 1}/{amount}</h2>

                        <p>Q:{QuestionNo + 1} {getData[QuestionNo].question}</p>
                        {getData[QuestionNo].options.map((item: string, ind: number)=>{
                            return(
                                <div className="answer-button" key={ind}>
                                {optionNum = optionNum + 1}) <div
                                 id={ind.toString()} onClick={()=>{selectOption(ind)}}>{item}</div>
                                
                                </div>
                                )
                        })}
                        <button className="learn-more" onClick={changeQuiz} >Next Question</button>
                        </>    
                }            
            </div>
        </div >
    )
}
