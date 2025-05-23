import React from "react";
import Task from "./Task";

function TaskList({ tasks = [], onDeleteTask = () => {} }) {
  const taskItems = tasks.map((task) => (
    <Task
      key={task.id}
      text={task.text}
      category={task.category}
      id={task.id}
      onDelete={onDeleteTask}
    />
  ));

  return <div className="tasks">{taskItems}</div>;
}

export default TaskList;