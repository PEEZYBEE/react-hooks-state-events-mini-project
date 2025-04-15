import { render, screen, fireEvent } from "@testing-library/react";
import Task from "../components/Task";
import "@testing-library/jest-dom";

test("displays task text and category", () => {
  render(<Task text="Test task" category="Code" id={1} onDelete={() => {}} />);
  expect(screen.getByText("Test task")).toBeInTheDocument();
  expect(screen.getByText("Code")).toBeInTheDocument();
});

test("calls onDelete with id when delete button is clicked", () => {
  const mockDelete = jest.fn();
  render(<Task text="Test task" category="Code" id={1} onDelete={mockDelete} />);
  const deleteButton = screen.getByRole("button", { name: "X" });
  fireEvent.click(deleteButton);
  expect(mockDelete).toHaveBeenCalledWith(1);
});