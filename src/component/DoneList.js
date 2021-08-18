import "../styles/DoneList.css";
import { useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import { selectDoneList} from "../common/reducers/todoSlice";

function DoneList(){

    const todo = useSelector(selectDoneList);
    
    return(
        <div>
            <h1>Done List</h1>
            { todo.map((doneItem) =>(
                    <TodoItem key ={doneItem.id} id={doneItem.id}></TodoItem>
                ))}
        </div>)
}
export default DoneList;
