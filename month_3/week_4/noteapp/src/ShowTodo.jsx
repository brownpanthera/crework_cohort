import React from 'react'

const ShowTodo = (props)=>{
    return(
     <div className='task-list'>
        <p>{props.todo}</p>
        <button>X</button>
     </div>    
    )
}
export default ShowTodo;