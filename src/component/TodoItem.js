import React from "react"
import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { selectTodoById } from "../common/reducers/todoSlice";
import {ToogleTodo } from "../common/reducers/todoSlice";
import {RemoveTodo} from "../common/reducers/todoSlice";
import "../styles/TodoItem.css";
import {removeTodos} from "../api/todosApi";
import {updateTodos} from "../api/todosApi";
import { CloseCircleFilled } from '@ant-design/icons';
import { Tooltip, Button,Popconfirm } from 'antd';
function TodoItem(props){
    const todo  = useSelector(state => selectTodoById(state,props.id));
    const dispatch = useDispatch();
    const todoStatus = todo.done? "done":" ";
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading] = React.useState(false);
    const propmptText = <span>Please double click to toogle</span>;

    const showPopconfirm = () => {
        setVisible(true);
      };
    const handleCancel = () => {
        setVisible(false);
      };
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
        <div className= "TodoItem">
        <div className ="TodoItemBody">
             <Tooltip placement="leftTop" title={propmptText}>
            <span className = {`TodoItem-todo-${todoStatus}`} onDoubleClick={handleClick}>{todo.text}</span></Tooltip>
            
            <Popconfirm
        title="Do you want to confirm removal of this Todo?"
        visible={visible}
        onConfirm={handleRemove}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}>
            <CloseCircleFilled className = "RemoveButton" onClick={showPopconfirm}></CloseCircleFilled>
            </Popconfirm>
        </div>
        </div>
    )
}
export default TodoItem;