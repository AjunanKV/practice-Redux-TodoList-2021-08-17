import { useSelector,useDispatch} from "react-redux";
import {updateTodo,RemoveTodo,selectTodoById } from "../common/reducers/todoSlice";
import "../styles/TodoItem.css";
import {removeTodos,updateTodos} from "../api/todosApi";
import { CloseCircleFilled,FormOutlined } from '@ant-design/icons';
import { Tooltip,Popconfirm,Modal,Input } from 'antd';
import React,{ useState } from 'react';

function TodoItem(props){
    const todo  = useSelector(state => selectTodoById(state,props.id));
    const dispatch = useDispatch();
    const todoStatus = todo.done? "done":"Undone";
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading] = React.useState(false);
    const propmptText = <span>Please double click to toogle</span>;
    const disableText = <span>This button is disabled(cannot edit finished items)</span>
    const [modalText, setModalText] = useState(todo.text)
    const [isModalVisible, setIsModalVisible] = useState(false);


    const showModal = () => {
        setModalText(todo.text)
        setIsModalVisible(true);
      };

      const handleModalCancel = () => {
        setIsModalVisible(false);
         };

      function ModifyToDo() {
        if (modalText !=='') {
            updateTodos(todo.id, {text: modalText})
            .then((response) => {
                dispatch(updateTodo(response.data))
            })
            setIsModalVisible(false);
        } else {
            handleModalCancel()
        }  
    }

    const showPopconfirm = () => {
        setVisible(true);
      };
    const handleCancel = () => {
        setVisible(false);
      };
    function handleClick(){
        updateTodos(props.id, {done: !todo.done}).then((response) =>{
            dispatch(updateTodo({id: props.id, updateTodos: response.data}));
        });
        
    };
    function HandleModify(event) {
        setModalText(event.target.value)
    } 

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
            {todoStatus === 'Undone'?
               <FormOutlined className = "RemoveButton" onClick={showModal}/>:
              <Tooltip placement="leftTop" title={disableText}>
              <FormOutlined className = "RemoveButton" disabled/></Tooltip>
            }
            <Modal title="Edit to-do" visible={isModalVisible} onOk={ModifyToDo} onCancel={handleModalCancel} destroyOnClose={true}>
               <Input value={modalText} onChange={HandleModify}></Input>
            </Modal>

        </div>
        </div>
    )
}
export default TodoItem;