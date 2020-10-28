import React from 'react'
import "../css/result.css"
import "../css/animatedButtons2.css"
import {State} from "./store/store"
// const {AddCategory, AddDifficulty, AddAmount, } = React.useContext(State);

export default function result() {
    return (
        <div className="start-result-div">
            <h1>
             <span>Congratulations!</span> you succeed in the Quiz.
            </h1>
            <h1>
            By <span>8/10</span>
            </h1>
            
            <div className="container1 section__box001">
            <a href="#" className="btn">Try more Quizes</a>
            </div>
        
            {/* <div className="section__box section__box001">
			<button className="r-button ai-element ai-element_type3 ai-element8">
				<span className="ai-element__label ai-element__label001">Go Back</span>
			</button>		
            </div> */}
        </div>
    )
}
