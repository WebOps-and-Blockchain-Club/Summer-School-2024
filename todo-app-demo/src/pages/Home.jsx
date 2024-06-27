import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = ({ tasks, addTask, deleteTask, editTask }) => {
  return (
    <div className="container mx-auto p-4">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default Home;
