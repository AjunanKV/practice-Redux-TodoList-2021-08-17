import React from "react"
import {initialTodoList} from "../common/constants/constants";
import {getTodoById} from "../common/utils/utils"

function TodoItem(props){
    const todo = getTodoById(initialTodoList,props.id);

    

    return(
        <div>
             {todo.text}
        </div>
    )
}
export default TodoItem;