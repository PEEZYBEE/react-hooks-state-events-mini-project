// src/components/TaskList.js
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  if (!tasks || !Array.isArray(tasks)) return null;

  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;