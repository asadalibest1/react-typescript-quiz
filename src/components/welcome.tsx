import React from 'react'
import "../css/welcome.css"
import {State} from "./store/store"

export default function Welcome() {

    React.useEffect(()=>{
        function animate(){
         const paper: any = document.querySelector(".paper");
     const Animate = paper.animate([
        {opacity: "1"},
         // {transform: "translate(-1000px, 0)"},
     ],{
         duration: 900,
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
        ],{
            duration: 200,
            iterations: 1,
        })}

const {AddCategory, AddCategoryName, changePage} = React.useContext(State);
    
    const selectOption =(id: any, cat: any)=>{
        const _id: any = document.getElementById(id);
        AddCategoryName(_id.innerText);
        AddCategory(cat)
    
        paperAnimate();
        setTimeout(()=>{
            changePage(2)
        }, 200)
    }
    
    return (
        <div className="main-welcome-div">
            <div className="paper">
                <h2>Welcome to my Quiz App</h2>
                <p>Which type of Quiz you want to Start?</p>
                <div className="quize-list">

                    <span className="feild-style" id="cat1"onClick={()=>{selectOption("cat1", 22)}}>Geography</span>                    
                    <span className="feild-style" id="cat1"onClick={()=>{selectOption("cat1", 18)}}>IT</span>
                    <span className="feild-style" id="cat2"onClick={()=>{selectOption("cat2", 21)}}>Sports</span>
                    <span className="feild-style" id="cat3"onClick={()=>{selectOption("cat3", 23)}}>History</span>
                    <span className="feild-style" id="cat4"onClick={()=>{selectOption("cat4", 17)}}>Science & Nature</span>
                    <span className="feild-style" id="cat5"onClick={()=>{selectOption("cat5", 9)}}>General Knowledge</span>
                </div>
            </div>
            {/* </CSSTransition> */}
        </div>
    )
}
