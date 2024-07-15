import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TodoService from "../services/TodoService";

const TodoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    dueDate: "",
    completed: "",
  });

  useEffect(() => {
    if (id) {
      TodoService.getTodoById(id).then((response) => {
        setTodo(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      TodoService.updateTodo(id, todo).then(() => {
        navigate("/");
      });
    } else {
      TodoService.createTodo(todo).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-6 w-full max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">
        {id ? "Edit Todo" : "Create Todo"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description:</label>
          <input
            type="text"
            name="description"
            value={todo.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={todo.dueDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Completed:</label>
          <input
            type="text"
            name="completed"
            value={todo.completed}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
