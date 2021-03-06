import TodoForm from "./todoForm";
import TodoGroup from "./TodoGroup";
import "../styles/TodoList.css";
import {getTodos} from "../api/todosApi";
import React,{ useEffect } from "react";
import { useDispatch } from "react-redux";
import {addResponse} from "../common/reducers/todoSlice";

function TodoList(){

    const dispatch = useDispatch();
    useEffect(() => {
        getTodos().then((response) => {
            dispatch(addResponse(response.data));
        })
    })
    return(
        <section className = "container">
        <div className = "left-half">
            <h1 className = "TodoList">TodoList</h1>
            <TodoForm></TodoForm>
            <TodoGroup></TodoGroup>
          
        </div>
        </section>
    )
}
export default TodoList;