import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";
import { createSelector } from "reselect";
import { updateTodos } from "../../api/todosApi";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: [],
    entities: {
        
    }
});

const todoSlice = createSlice({
        name: "todos",
        initialState: initialState,
        reducers: {
            AddTodo(state,action){
                todosAdapter.addOne(state,action.payload);
                return state;
            },
            ToogleTodo(state,action){
                todosAdapter.updateOne(state, {
                    id: action.payload.id,
                    changes: action.payload.updateTodos
                });
            },
            RemoveTodo(state,action){
                todosAdapter.removeOne(state,action.payload.id);
              },
              addResponse(state,action){
                todosAdapter.addMany(state,action.payload);
              },
        },
});

export const {AddTodo} = todoSlice.actions;
export const {ToogleTodo} = todoSlice.actions;
export const {RemoveTodo} = todoSlice.actions;
export const {addResponse} = todoSlice.actions;
export const{selectIds: selectTodoIds, selectById: selectTodoById, selectAll: selectTodos} =
todosAdapter.getSelectors((state) => state.todoList);


export const selectDoneList = createSelector( [selectTodos], todos =>
    todos.filter((todo) => todo.done));


export default todoSlice.reducer;