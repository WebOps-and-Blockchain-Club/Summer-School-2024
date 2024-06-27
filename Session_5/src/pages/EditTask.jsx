import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditTask = ({ tasks, updateTask }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", deadline: "" });

  useEffect(() => {
    const currentTask = tasks.find((task) => task.title === title);
    if (currentTask) {
      setTask(currentTask);
    }
  }, [title, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(task);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      <div className="mb-2">
        <label className="block text-gray-900 font-semibold text-lg">
          Title
        </label>
        <input
          type="text"
          value={task.title}
          //   onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="w-full px-3 py-2 border rounded bg-[#B2C6B6]"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-900 font-semibold text-lg">
          Deadline
        </label>
        <input
          type="date"
          value={task.deadline}
          onChange={(e) => setTask({ ...task, deadline: e.target.value })}
          className="w-full px-3 py-2 border rounded bg-[#B2C6B6]"
        />
      </div>
      <button
        type="submit"
        className="bg-[#185a4c] text-white rounded-xl px-4 py-2"
      >
        Update
      </button>
    </form>
  );
};

export default EditTask;
