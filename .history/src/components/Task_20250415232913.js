import React from "react";

function Task({ text, category, id, onDelete }) {
  const handleClick = () => {
    onDelete(id); // Pass id instead of text
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;