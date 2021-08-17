import React from "react"
import TodoItem from "./TodoItem"
import { selectTodoIds } from "../common/reducers/todoSlice"
import { useSelector} from "react-redux";
import { selectTodoById } from "../common/reducers/todoSlice"

function TodoGroup(){
    const todoIds = useSelector(selectTodoIds);

    return(
        <div>
            { todoIds.map((id) =>(
                    <TodoItem key ={id} id={id}></TodoItem>
                ))}
        </div>
    )
}
export default TodoGroup;