import React from "react"
import TodoItem from "./TodoItem"
import {initialTodoList} from "../common/constants/constants";
import {getAllTodoIds} from "../common/utils/utils"

function TodoGroup(){
    return(
        <div>
            { getAllTodoIds(initialTodoList).map((id) =>(
                    <TodoItem key ={id} id={id}></TodoItem>
                ))}
        </div>
    )
}
export default TodoGroup;