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
        if(text==="")
        {
            alert("Please input something in the Textfield first before adding");
        }
        else{
            dispatch(AddTodo(text));
            setText("");
        }
        
    }
    return (
    <div className = "body">
        <input type="text" className="inputBox" placeholder="Input a new todo item"
        value={text} onChange={changeHandler}></input>
        <button className = "addButton" onClick={addHandler}>add</button>
        </div>
)};
export default TodoForm;
