import React from "react";

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
