import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import TodoService from "../services/TodoService";

const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    TodoService.getTodoById(id).then((response) => {
      setTodo(response.data);
    });
  }, [id]);

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white shadow-md rounded p-6 w-full max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">{todo.title}</h2>
      <p className="text-gray-700 mb-2">{todo.description}</p>
      <p className="text-gray-700 mb-2">Due Date: {todo.dueDate}</p>
      <p className="text-gray-700 mb-4">Completed: {todo.completed}</p>
      <Link
        to={`/edit/${todo.id}`}
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Edit
      </Link>
    </div>
  );
};

export default TodoDetails;
