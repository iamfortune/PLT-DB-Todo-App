import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoDetails from "./components/TodoDetails";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-600 text-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Todo App</h1>
            <nav>
              <Link to="/" className="text-white mr-4 hover:underline">
                Home
              </Link>
              <Link to="/create" className="text-white hover:underline">
                Create Todo
              </Link>
            </nav>
          </div>
        </header>
        <main className="container m-4 p-4 flex-1">
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/todo/:id" element={<TodoDetails />} />
            <Route path="/create" element={<TodoForm />} />
            <Route path="/edit/:id" element={<TodoForm />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2024 Todo App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
