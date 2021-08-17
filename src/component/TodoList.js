import React from "react";
import TodoForm from "./todoForm";
import TodoGroup from "./TodoGroup";
import "../styles/TodoList.css";
function TodoList(){
    return(
        <div>
            <h1>TodoList</h1>
            <TodoGroup></TodoGroup>
            <TodoForm></TodoForm>
        </div>
    )
}
export default TodoList;