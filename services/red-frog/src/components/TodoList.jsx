import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoService from "../services/TodoService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodoService.getTodos().then((response) => {
      setTodos(response.data);
    });
  }, []);

  const deleteTodo = (id) => {
    TodoService.deleteTodo(id).then(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    });
  };

  return (
    <div className="bg-white shadow-md rounded p-6 w-full max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded hover:shadow-lg transition-shadow duration-300"
          >
            <Link
              to={`/todo/${todo.id}`}
              className="text-blue-500 hover:underline"
            >
              {todo.title}
            </Link>
            <div className="flex space-x-2">
              <Link
                to={`/edit/${todo.id}`}
                className="text-green-500 hover:text-green-700"
              >
                <FontAwesomeIcon icon={faEdit} />
              </Link>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
