import React, {createContext} from 'react'
import {ACTION_TYPE} from "../types/quiz_types";

const Data: any= {
    category: 0,
    categoryName: "",
    difficulty: "",
    amount: 10,
    pageNum: 1,
    totalNum: 0,
};

export const State = createContext(Data);

const reducer = (state: typeof Data, action: ACTION_TYPE) =>{
    switch(action.type){
        
       
        case "ADD_CAT": {

            return {
                    ...state,
                    category: action.payload,
                    // img: action.payload2,
                    // title: action.payload3
                    } 
        
        
            }
            case "ADD_CAT_NAME": {

                return {
                        ...state,
                        categoryName: action.payload,
                        } 
            
            
                }
            case "ADD_DIFF": {

                    return {
                            ...state,
                            difficulty: action.payload,
                            } 
            
            }
            case "ADD_AMOUNT": {

                return {
                        ...state,
                        amount: action.payload,
                        } 
        
        }
        case "CHANGE_PAGE": {

            return {
                    ...state,
                    pageNum: action.payload,
                    } 
        
        
            }
            case "ADD_TOTALNUM": {

                return {
                        ...state,
                        totalNum: action.payload,
                        } 
            
            
                }
    default : return state;     
            
}
};

export const TransProvider: any = ({children}: any) =>{
    let [data, dispatch] = React.useReducer(reducer, Data);
    

const AddCategory = (num: number) =>{
    dispatch({
        type: "ADD_CAT",
        payload: num,
    })

}
const AddCategoryName = (val: string) =>{
    dispatch({
        type: "ADD_CAT_NAME",
        payload: val,
    })

}
const AddDifficulty = (val: string) =>{
    dispatch({
        type: "ADD_DIFF",
        payload: val,
    })

}
const AddAmount = (num: number) =>{
    dispatch({
        type: "ADD_AMOUNT",
        payload: num,
    })

}
const changePage = (num: number) =>{
    dispatch({
        type: "CHANGE_PAGE",
        payload: num,
    })

}
const AddTotalNum = (num: number) =>{
    dispatch({
        type: "ADD_TOTALNUM",
        payload: num,
    })

}
const values ={
    data,
    AddCategory,
    AddCategoryName,
    AddDifficulty,
    AddAmount,
    changePage,
    AddTotalNum,
}

    return(
        <>

        <State.Provider value={values}>
                {children}
        </State.Provider>
        
        </>
        
    )
}