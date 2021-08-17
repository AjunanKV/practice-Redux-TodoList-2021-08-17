import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {AddTodo } from "../common/reducers/todoSlice"
import "../styles/TodoForm.css";
function TodoForm() {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function changeHandler(event){
        setText(event.target.value);
    }
    function addHandler(event){
        dispatch(AddTodo(text));
        setText("");
    }
    return (
    <div className = "body">
        <input type="text" placeholder="Input a new todo item"
        value={text} onChange={changeHandler}></input>
        <button onClick={addHandler}>add</button>
        </div>
)};
export default TodoForm;
