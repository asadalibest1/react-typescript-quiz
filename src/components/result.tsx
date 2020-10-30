import React from 'react'
import "../css/result.css"
import "../css/animatedButtons.css"
import {State} from "./store/store"

export default function Result() {

    React.useEffect(()=>{
        function animate(){
         const animateDiv: any = document.querySelector(".start-result-div");
            const Animate = animateDiv.animate([
                {opacity: "1"},
            ],{
                duration: 1000,
                iterations: 1,
            }
            )
            Animate.onfinish = ()=> animateDiv.style.opacity= "1";
            }
            animate()
                },[])
                
    const {data, changePage, AddTotalNum} = React.useContext(State);
    const {categoryName, amount, totalNum} = data;
    let text1: string = "";
    let text2: string = "";
    const percentage: Number = totalNum*100/amount;
    if(percentage >= 60){
        text1 = "Congratulations!"
        text2 = "succeed"}
        else{
        text1 = "It Looks! ";
        text2 = "need some improvement"
    }
    return (
        <div className="start-result-div">
            <h1>
             <span>{text1}</span> you {text2} for the {categoryName} Quiz.
            </h1>
            <h1>
            By <span>{totalNum}/{amount}</span>
            </h1>
            
            <div className="container1 section__box001">
            <a href="#" className="btn" onClick={(e)=>{e.preventDefault(); AddTotalNum(0); changePage(1)}}>Try more Quizes</a>
            </div>
        
            {/* <div className="section__box section__box001">
			<button className="r-button ai-element ai-element_type3 ai-element8">
				<span className="ai-element__label ai-element__label001">Go Back</span>
			</button>		
            </div> */}
        </div>
    )
}
