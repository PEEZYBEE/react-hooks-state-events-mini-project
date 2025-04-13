// src/__tests__/NewTaskForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import App from "../components/App"; // Add this import
import { CATEGORIES } from "../data";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();
  render(<NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />);
  fireEvent.change(screen.getByLabelText(/details/i), {
    target: { value: "New Task" },
  });
  fireEvent.change(screen.getByLabelText(/category/i), {
    target: { value: "Code" },
  });
  fireEvent.submit(screen.getByRole("button", { name: /add task/i }));
  expect(onTaskFormSubmit).toHaveBeenCalledWith({
    text: "New Task",
    category: "Code",
  });
});

test("adds a new item to the list when the form is submitted", () => {
  render(<App />);
  const initialCodeCount = screen.queryAllByText(/Code/).length;
  fireEvent.change(screen.getByLabelText(/details/i), {
    target: { value: "New Task" },
  });
  fireEvent.change(screen.getByLabelText(/category/i), {
    target: { value: "Code" },
  });
  fireEvent.submit(screen.getByRole("button", { name: /add task/i }));
  const newCodeCount = screen.queryAllByText(/Code/).length;
  expect(newCodeCount).toBe(initialCodeCount + 1);
});