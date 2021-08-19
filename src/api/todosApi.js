import api from "./api";

export const getTodos = () => {
    return api.get("/todos");
   }

export const createTodos = (text) => {
    return api.post("/todos",{text})
}

export const updateTodos = (id, updateTodos) => {
    return api.put(`/todos/${id}`,updateTodos);
}

export const removeTodos = (id) => {
    return api.delete(`/todos/${id}`);
}


