import React from "react";
import './todoItem.css'

function TodoItem(props) {
    return(
        <div className="todo-item">
            {props.item}
        </div>
    )
}

export default TodoItem;