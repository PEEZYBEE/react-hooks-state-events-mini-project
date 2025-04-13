// src/App.js
import React, { useState } from "react";
import { TASKS, CATEGORIES } from "./data";
import TaskList from "./components/TaskList";
import CategoryFilter from "./components/CategoryFilter";
import NewTaskForm from "./components/NewTaskForm";

// Add IDs to initial TASKS data
const tasksWithIds = TASKS.map((task, index) => ({
  ...task,
  id: index + 1,
}));

function App() {
  const [tasks, setTasks] = useState(tasksWithIds);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter tasks based on selected category
  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  // Handle adding a new task
  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  // Handle deleting a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h2>My Tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={filteredTasks}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;