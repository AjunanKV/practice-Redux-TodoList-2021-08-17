import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: [1],
    entities: {
        1: {
                id: "1",
                text: "testing todo1",
                done: false,
            },
        2: {
            id: "2",
            text: "testing todo2",
            done: false,
            },
        3: {
                id: "3",
                text: "testing todo2",
                done: false,
        },
    }
});

const todoSlice = createSlice({
        name: "todos",
        initialState: initialState,
        reducers: {
            AddTodo(state,action){
                todosAdapter.addOne(state,{
                    id: uuid(),
                    text: action.payload,
                    done: false,
                });
                return state;
            },
            ToogleTodo(state,action){
              const todo = state.entities[action.payload]
              todo.done = !todo.done;
                
            },
            RemoveTodo(state,action){
                todosAdapter.removeOne(state,action.payload);
                  
              },
        },
});

export const {AddTodo} = todoSlice.actions;
export const {ToogleTodo} = todoSlice.actions;
export const {RemoveTodo} = todoSlice.actions;
export const{selectIds: selectTodoIds, selectById: selectTodoById} =
todosAdapter.getSelectors((state) => state.todoList);

export default todoSlice.reducer;