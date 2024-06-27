import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import EditTask from "./pages/EditTask";
import Navbar from "./components/Navbar";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };

  const deleteTask = (title) => {
    setTasks(tasks.filter((task) => task.title !== title));
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.filter((task) => task.title !== title))
    );
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.title === updatedTask.title ? updatedTask : task
      )
    );
    localStorage.setItem(
      "tasks",
      JSON.stringify(
        tasks.map((task) =>
          task.title === updatedTask.title ? updatedTask : task
        )
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              editTask={updateTask}
              addTask={addTask}
              deleteTask={deleteTask}
              tasks={tasks}
            />
          }
        />
        <Route
          path="/edit/:title"
          element={<EditTask updateTask={updateTask} tasks={tasks} />}
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
