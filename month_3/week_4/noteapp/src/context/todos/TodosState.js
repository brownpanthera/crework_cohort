import React from "react";
import Todo from "../../Todo";
import TodosContext from "./TodosContext";

const TodosState = (props)=>{
    const state = {Todo}
 
    return(
        <TodosContext.Provider value={state}>
            {props.children}
        </TodosContext.Provider>
    )
}


export default TodosState;