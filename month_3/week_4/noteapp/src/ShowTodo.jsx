import React from 'react'

const ShowTodo = (props)=>{
    return(
       <>
        <h6>{props.todo}</h6>
        <button>X</button>
       </>       
    )
}
export default ShowTodo;