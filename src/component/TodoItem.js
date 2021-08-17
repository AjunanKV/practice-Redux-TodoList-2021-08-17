import React from "react"
import { selectTodoById } from "../common/reducers/todoSlice";
import { useSelector} from "react-redux";

function TodoItem(props){
    const todo  = useSelector(state => selectTodoById(state,props.id));
    
    return(
        <div>
            {todo.text}
        </div>
    )
}
export default TodoItem;