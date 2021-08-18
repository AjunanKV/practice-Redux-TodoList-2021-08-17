import React from "react"
import { selectTodoById } from "../common/reducers/todoSlice";
import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import {ToogleTodo } from "../common/reducers/todoSlice";
import {RemoveTodo} from "../common/reducers/todoSlice";
import "../styles/TodoItem.css";

function TodoItem(props){
    const todo  = useSelector(state => selectTodoById(state,props.id));
    const dispatch = useDispatch();
    const todoStatus = todo.done? "done":" ";
    
    function handleClick(){
        dispatch(ToogleTodo(props.id));
    }
    function handleRemove(event){
        dispatch(RemoveTodo(props.id));
    }
    
    return(
        <div className ="TodoItemBody">
            <span className = {`TodoItem-todo-${todoStatus}`} onDoubleClick={handleClick}>{todo.text}</span>
            <button className = "RemoveButton" onClick={handleRemove}>X</button>
        </div>
    )
}
export default TodoItem;