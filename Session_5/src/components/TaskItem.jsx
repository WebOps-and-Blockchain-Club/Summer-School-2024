import React from "react";
import { Link } from "react-router-dom";

const TaskItem = ({ task, deleteTask, editTask }) => {
  return (
    <div className="p-4 rounded shadow-lg bg-[#B2C6B6]">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p className="text-gray-700">Deadline: {task.deadline}</p>
      <div className="flex space-x-2 mt-4">
        <Link to={`/edit/${task.title}`}>
          <button className="bg-[#185a4c] text-white rounded-xl px-4 py-2">
            Edit
          </button>
        </Link>
        <button
          onClick={() => deleteTask(task.title)}
          className="bg-[#E8ECD6] text-black rounded-xl px-4 py-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
