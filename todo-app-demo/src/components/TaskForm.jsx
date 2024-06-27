import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, deadline });
    setTitle("");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block text-gray-900 font-semibold text-lg">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded bg-[#B2C6B6]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-900 font-semibold text-lg">
          Deadline
        </label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full px-3 py-2 border rounded bg-[#B2C6B6]"
        />
      </div>
      <button
        type="submit"
        className="bg-[#185a4c] text-white rounded-xl px-4 py-2"
      >
        <span className="font-bold">+</span> Add
      </button>
    </form>
  );
};

export default TaskForm;
