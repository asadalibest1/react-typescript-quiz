import React from 'react'
import "../css/level.css"
import "../css/animatedButtons.css"
import {State} from "./store/store"

export default function Level() {
    const {AddDifficulty, changePage} = React.useContext(State);
    
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
        animate()
         },[])

const paperAnimate =()=>{
        const paper: any = document.querySelector(".paper");
        paper.animate([
            {opacity: "0"},
            // {transform: "translate(-1000px, 0)"},
        ],{
            duration: 200,
            iterations: 1,
        })}

const selectOption =(diff: string)=>{
        AddDifficulty(diff)
        paperAnimate();
        setTimeout(()=>{
            changePage(3)
        }, 200)
    }
         
    return (
        <div className="main-level-div">
            <div className="paper">
                <h2>Choose your Level!</h2>
            <div className="level">
                <div className="section__box" onClick={()=>{selectOption("easy")}}>
                    <button className="r-button ai-element ai-element_type1 ai-element4">
                        <span className="ai-element__label level-button">Easy</span>
                    </button>
                </div>
                <div className="section__box" onClick={()=>{selectOption("medium")}}>
                    <button className="r-button ai-element ai-element_type1 ai-element4">
                        <span className="ai-element__label level-button">Medium</span>
                    </button>
                </div>
                <div className="section__box" onClick={()=>{selectOption("hard")}}>
                    <button className="r-button ai-element ai-element_type1 ai-element4">
                        <span className="ai-element__label level-button">Hard</span>
                    </button>
                </div>
        </div>

        </div>
        </div >
    )
}
