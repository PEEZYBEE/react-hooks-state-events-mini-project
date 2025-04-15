import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../data";

test("renders form inputs and submit button", () => {
  render(<NewTaskForm categories={CATEGORIES} onTaskFormSubmit={() => {}} />);
  expect(screen.getByLabelText("Details")).toBeInTheDocument();
  expect(screen.getByLabelText("Category")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Add task" })).toBeInTheDocument();
});

test("calls onTaskFormSubmit with correct task data on form submission", () => {
  const mockSubmit = jest.fn();
  render(<NewTaskForm categories={CATEGORIES} onTaskFormSubmit={mockSubmit} />);

  const taskInput = screen.getByLabelText("Details");
  const categorySelect = screen.getByLabelText("Category");
  const submitButton = screen.getByRole("button", { name: "Add task" });

  fireEvent.change(taskInput, { target: { value: "Test task" } });
  fireEvent.change(categorySelect, { target: { value: "Code" } });
  fireEvent.click(submitButton);

  expect(mockSubmit).toHaveBeenCalledWith({ text: "Test task", category: "Code" });
});

test("clears task input and resets category after submission", () => {
  render(<NewTaskForm categories={CATEGORIES} onTaskFormSubmit={() => {}} />);

  const taskInput = screen.getByLabelText("Details");
  const categorySelect = screen.getByLabelText("Category");
  const submitButton = screen.getByRole("button", { name: "Add task" });

  fireEvent.change(taskInput, { target: { value: "Test task" } });
  fireEvent.change(categorySelect, { target: { value: "Food" } });
  fireEvent.click(submitButton);

  expect(taskInput).toHaveValue("");
  expect(categorySelect).toHaveValue(CATEGORIES[1]); // "Code"
});