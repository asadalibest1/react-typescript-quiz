import React from 'react'
import "../css/quiz.css"
import "../css/loader.css"
import "../css/quizButtons.scss"
import {getApiData} from "./Api/api"
import {filterDataType, dataType} from "./types/quiz_types"
import {State} from "./store/store"
import {colorList} from "./helper"


export default function Quiz() {
    const [getData, setData] = React.useState<filterDataType[]>([]);
    const [QuestionNo, setQuestionNo] = React.useState(0);
    const [id, setId] = React.useState <number|null> (null);

    const {data, AddTotalNum, changePage} = React.useContext(State);
    const {category, difficulty, amount, totalNum} = data;

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
    
        const fetchData = async ()=> {
            var Data: any = await getApiData(amount, category, difficulty);
            setData(Data);
        }
        fetchData();
         },[])

const changeQuiz = ()=>{

    colorList();
    setId(null);
    selectOption();
    if(QuestionNo !== (getData.length -1)){
        setQuestionNo(QuestionNo + 1)
    }else{
        paperAnimate();
        setTimeout(()=>{
            changePage(5)
        }, 200)
    }
        }
const selectOption =()=>{
    if(id !== null){
            const _id: any = document.getElementById(id.toString());
            if (_id.innerText === getData[QuestionNo].answer){
                AddTotalNum(totalNum + 1)        
    }
    }
}
const paperAnimate =()=>{
    const paper: any = document.querySelector(".paper");
    const Animate = paper.animate([
        {opacity: "0"},
    ],{
        duration: 200,
        iterations: 1,
    })}

let optionNum = 0;
const selectRed =(id: any)=>{
        
    colorList();
    const getClass: any = document.getElementsByClassName("answer-button")[id];
    getClass.style.background = "red";
        
    setId(id);
    }
    return (
        <div className="main-quiz-div">
            <div className="paper">
                {
                (!getData.length) ?
                    
                    <div className="loader-div"><div className="loader"></div></div>
                :
                        <>
                        <h2>Question # {QuestionNo + 1}/{amount}</h2>
                        <p>Q:{QuestionNo + 1} {getData[QuestionNo].question}</p>
                        {getData[QuestionNo].options.map((item: string, ind: number)=>{
                            return(
                                <div
                                className="answer-button"
                                key={ind}
                                id="ansBtn">
                                {optionNum = optionNum + 1}) <div

                                id={ind.toString()}
                                onClick={()=>{selectRed(ind)}}>
                                {item}
                                </div>
                                
                                </div>
                                )
                        })}
                        <button className="learn-more" onClick={changeQuiz}>Next Question</button>
                        </>    
                }            
            </div>
        </div >
    )
}
