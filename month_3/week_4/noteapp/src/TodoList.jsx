import React from "react";
import ShowTodo from "./ShowTodo";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="card">
      <h2>Todo List</h2>
      <Todo />
      <div className="container"></div>
    </div>
  );
};

export default TodoList;
