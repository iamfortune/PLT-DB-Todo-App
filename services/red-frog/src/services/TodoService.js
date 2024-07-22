import axios from "axios";

const API_URL = "http://localhost:3042";

const axiosInstance = axios.create({
  baseURL: API_URL,
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
