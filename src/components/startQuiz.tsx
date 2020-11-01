import React, { FormEvent } from 'react'
import "../css/startQuiz.css"
import "../css/animatedButtons.css"
import {State} from "./store/store"

//  Type
type __FormEvent = React.FormEvent<EventTarget>;
type __ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export default function StartQuiz() {
    const {data, AddAmount, changePage} = React.useContext(State);
    const {categoryName, difficulty, amount} = data;

    React.useEffect(()=>{
        function animate(){
         const quizeDiv: any = document.querySelector(".start-quiz-div");
            const Animate = quizeDiv.animate([
                {opacity: "1"},
            ],{
                duration: 1000,
                iterations: 1,
            }
            )
            Animate.onfinish = ()=> quizeDiv.style.opacity= "1";
            }
            animate()
                },[])

    const paperAnimate =()=>{
        const quizeDiv: any = document.querySelector(".start-quiz-div");
        quizeDiv.animate([
            {opacity: "0"},
        ],{
            duration: 400,
            iterations: 1,
        })}

    const selectOption =()=>{
            paperAnimate();
            setTimeout(()=>{
                changePage(4)
            }, 200)
    }

    return (
        <div className="start-quiz-div">
            <h1>
                You Selected <span className="data">"{categoryName}"</span> for your Quiz.
            </h1>
            <h1>
            Your Difficulty Level will be <span className="data">"{difficulty.toUpperCase()}"</span>.
            </h1>
            <div className="input1 para">Pleaze enter the Number of your qustions<br  />you want in your quiz.
            </div>
            <div className="input1">
            <input type="number" value={amount} onChange={(e: __ChangeEvent)=>{AddAmount(e.target.value)}} className="quiz-number"/> 
            </div>
        <div className="buttons">
        {/* <div className="section__box section__box001">
			<button className="r-button ai-element ai-element_type3 ai-element6">
				<span className="ai-element__label ai-element__label001">Start Quiz</span>
			</button>		
            </div> */}
        
            <div className="container1 section__box001" onClick={(e: __FormEvent)=>{e.preventDefault(); selectOption()}}>
            <span className="btn">Start Quiz</span>
            </div>
        
            <div className="section__box section__box001" onClick={()=>{changePage(1)}}>
			<button className="r-button ai-element ai-element_type3 ai-element8">
				<span className="ai-element__label ai-element__label001">Go Back</span>
			</button>		
            </div>
        </div>

        </div>
    )
}
