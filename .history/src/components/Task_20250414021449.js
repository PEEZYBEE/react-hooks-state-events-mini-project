// src/components/Task.js
import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <li className="task">
      <div>
        <span>{text}</span> — <span>{category}</span>
      </div>
      <button onClick={onDelete}>X</button>
    </li>
  );
}

export default Task;