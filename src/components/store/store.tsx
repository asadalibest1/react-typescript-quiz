import React, {createContext} from 'react'

const Data = {
    category: 0,
    categoryName: "",
    difficulty: "",
    amount: 10,
    pageNum: 1,
    fetchCondition: false,
};

export const State: any = createContext(Data);

const reducer = (state: any, action: any) =>{
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
                    // img: action.payload2,
                    // title: action.payload3
                    } 
        
        
            }
            case "CHANGE_FETCHCONDITION": {

                return {
                        ...state,
                        fetchCondition: action.payload,
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
        // payload2: img,
        // payload3: title,
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
const setFetchCondition = (boolean: boolean) =>{
    dispatch({
        type: "CHANGE_FETCHCONDITION",
        payload: boolean,
    })

}
const values ={
    data,
    AddCategory,
    AddCategoryName,
    AddDifficulty,
    AddAmount,
    changePage,
    setFetchCondition,
}

    return(
        <>

        <State.Provider value={values}>
                {children}
        </State.Provider>
        
        </>
        
    )
}