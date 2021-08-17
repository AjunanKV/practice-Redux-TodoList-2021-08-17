import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../common/reducers/todoSlice"

const store = configureStore({
    reducer: {
        todoList: todosReducer
    },
});

export default store;