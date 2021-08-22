import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {AddTodo } from "../common/reducers/todoSlice"
import {createTodos} from "../api/todosApi";
import "../styles/TodoForm.css";
import { Button,Input,message } from 'antd';
function TodoForm() {

    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const { TextArea } = Input;

    function changeHandler(event){
        setText(event.target.value);
    }
    function addHandler(event){
        if(text==="")
        {
            message.error('Please input something in the Textfield first before adding');
        }
        else{
            createTodos(text).then((response)=>{
                dispatch(AddTodo(response.data));
            })
            setText("");
            message.success('Todo List is updated');
        }
    }
    return (
    <section className = "container">
        <div className = "body">
           <TextArea showCount maxLength={100} className="inputBox" placeholder="Input a new todo item" value= {text} onChange={changeHandler}/>
           <Button type="default" className = "addButton" onClick = {addHandler}>Add Todo</Button>
          </div>
        </section>
    
)};
export default TodoForm;
