import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, editTask }) => {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">There are no tasks.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
