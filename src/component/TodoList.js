import React from "react";
import TodoForm from "./todoForm";
import TodoGroup from "./TodoGroup";
import "../styles/TodoList.css";
import {getTodos} from "../api/todosApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addResponse} from "../common/reducers/todoSlice";

function TodoList(){

    const dispatch = useDispatch();
    useEffect(() => {
        getTodos().then((response) => {
            console.log("response" , response.data)
            dispatch(addResponse(response.data));
        })
    })
    return(
        <section className = "container">
        <div className = "left-half">
            <h1>TodoList</h1>
            <TodoForm></TodoForm>
            <TodoGroup></TodoGroup>
          
        </div>
        </section>
    )
}
export default TodoList;