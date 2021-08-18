import React from "react"
import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { selectTodoById } from "../common/reducers/todoSlice";
import {ToogleTodo } from "../common/reducers/todoSlice";
import {RemoveTodo} from "../common/reducers/todoSlice";
import "../styles/TodoItem.css";
import {removeTodos} from "../api/todosApi";
import {updateTodos} from "../api/todosApi";

function TodoItem(props){
    const todo  = useSelector(state => selectTodoById(state,props.id));
    const dispatch = useDispatch();
    const todoStatus = todo.done? "done":" ";
    function handleClick(){
       
        updateTodos(props.id, {done: !todo.done}).then((response) =>{
            dispatch(ToogleTodo({id: props.id, updateTodos: response.data}));
        });
        
    };
    function handleRemove(event){
        removeTodos(props.id).then((response)=>{
            dispatch(RemoveTodo(response.data));
        });
    }
    return(
        <div className ="TodoItemBody">
            <span className = {`TodoItem-todo-${todoStatus}`} onDoubleClick={handleClick}>{todo.text}</span>
            <button className = "RemoveButton" onClick={handleRemove}>X</button>
        </div>
    )
}
export default TodoItem;