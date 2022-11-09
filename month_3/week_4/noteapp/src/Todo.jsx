import React, { useState } from "react";
import ShowTodo from "./ShowTodo";
import TodoCard from "./TodoList";
function Todo() {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = todo;
    setData([...data, newData]);

    setTodo("");
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <input
          className="task-input"
          type="text"
          value={todo}
          onChange={onChangeHandler}
          placeholder="your todo"
        />
        <button className="add-btn">ADD</button>
      </form>
      <button className="swap-btn">Swap all</button>

      {data.map((value, index) => {
        return <ShowTodo key={index} id={index} todo={value} />;
      })}
    </div>
  );
}

export default Todo;
