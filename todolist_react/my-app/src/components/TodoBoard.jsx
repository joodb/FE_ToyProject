import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
    return (
        <div>
            <h1>Todo List</h1>
            {props.todoList.slice(0).reverse().map((item, i) => <TodoItem item={item} key={i} /> )}
        </div>
    )
}

export default TodoBoard;