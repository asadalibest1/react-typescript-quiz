import React from 'react'
import './App1.css'
import Header from './components/header'
import Welcome from './components/welcome'
import Level from './components/level'
import StartQuiz from './components/startQuiz'
import Quiz from './components/quiz'
import Result from './components/result';
import {State} from './components/store/store'

export default function App1() {
    const {data} = React.useContext(State);
    const {pageNum} = data;

    return (
<div className="main-wallpaper">
    
    <Header />
    {(pageNum === 1) ? <Welcome /> : false}
    {(pageNum === 2) ? <Level /> : false}
    {(pageNum === 3) ? <StartQuiz /> : false}
    {(pageNum === 4) ? <Quiz /> : false}
    {(pageNum === 5) ? <Result /> : false}
        </div>
    )
}
