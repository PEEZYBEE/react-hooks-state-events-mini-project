import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";
import "@testing-library/jest-dom";

test("renders all tasks", () => {
  const tasks = [
    { id: 1, text: "Build a todo app", category: "Code" },
    { id: 2, text: "Buy rice", category: "Food" },
  ];
  render(<TaskList tasks={tasks} />);
  expect(screen.getByText("Build a todo app")).toBeInTheDocument();
  expect(screen.getByText("Buy rice")).toBeInTheDocument();
});

test("renders tasks with duplicate text correctly", () => {
  const tasks = [
    { id: 1, text: "Test task", category: "Code" },
    { id: 2, text: "Test task", category: "Food" },
  ];
  render(<TaskList tasks={tasks} />);
  expect(screen.getAllByText("Test task")).toHaveLength(2);
});