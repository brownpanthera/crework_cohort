import React from 'react';
import { useContext } from 'react';
import todosContext from './context/todos/TodosContext';

const CompletdList = (props)=>{
  const swap = useContext(todosContext)
    return( 
      <div className="card-2">
      <h2>Completed List</h2>
      <div className="container-2">
      <h3>{swap.todo}</h3>
      </div>
    </div>
    )
}

export default CompletdList;