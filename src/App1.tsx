import React from 'react'
import './App1.css'
import Header from './components/header'
import Welcome from './components/welcome'
import Level from './components/level'
import StartQuiz from './components/startQuiz'
import Quiz from './components/quiz'
import Result from './components/result';
import {State} from './components/store/store'
import {getApiData} from "./components/Api/api"

export default function App1() {
    const {data, setData} = React.useContext(State);
    const {category, difficulty, amount, getData, pageNum} = data;

    // React.useEffect(()=>{
    //     const fetchData = async ()=>{
    //         const Data: any= await getApiData(amount, category, difficulty);
    //         setData(Data);
    //     }
    //     fetchData();
    // },[])

    return (
<div className="main-wallpaper">
    
    <Header />
    {(pageNum === 1) ? <Welcome /> : false}
    {(pageNum === 2) ? <Level /> : false}
    {(pageNum === 3) ? <StartQuiz /> : false}
    {(pageNum === 4) ? <Quiz /> : false}
    {(pageNum === 5) ? <Result /> : false}
{/* // {console.log(pageNum)} */}
        </div>
    )
}
