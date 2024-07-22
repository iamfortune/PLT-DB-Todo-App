import axios from "axios";

import.meta.env.PLT_TODOCLIENT_URL;

const axiosInstance = axios.create({
  baseURL: PLT_TODOCLIENT_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getTodos = () => {
  return axiosInstance.get("/todo");
};

const getTodoById = (id) => {
  return axiosInstance.get(`/todo/${id}`);
};

const createTodo = (todo) => {
  return axiosInstance.post("/todo/", todo);
};

const updateTodo = (id, todo) => {
  return axiosInstance.put(`/todo/${id}`, todo);
};

const deleteTodo = (id) => {
  return axiosInstance.delete(`/todo/${id}`);
};

export default {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
