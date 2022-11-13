import React from "react";
import Todo from "./Todo";

const ShowTodo = (props) => {
  return (
        <div className="container">
        <div className="main">
        {props.todo}
        <button className="remove">X</button>
        </div>
        </div>
  );
};
export default ShowTodo;
