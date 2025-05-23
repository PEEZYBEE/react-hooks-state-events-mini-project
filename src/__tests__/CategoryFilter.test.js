import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import App from "../components/App";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  render(<CategoryFilter categories={CATEGORIES} selectedCategory="All" onCategoryChange={() => {}} />);
  for (const category of CATEGORIES) {
    expect(screen.getByText(category)).toBeInTheDocument();
  }
});

test("clicking the category button adds a class of 'selected' to the button", () => {
  render(<App />);

  const codeButton = screen.getByRole("button", { name: "Code" });
  const allButton = screen.getByRole("button", { name: "All" });

  fireEvent.click(codeButton);

  expect(codeButton).toHaveClass("selected");
  expect(allButton).not.toHaveClass("selected");
});

test("clicking the category button filters the task list", () => {
  render(<App />);

  const codeButton = screen.getByRole("button", { name: "Code" });

  fireEvent.click(codeButton);

  expect(screen.getByText("Build a todo app")).toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();
});

test("displays all tasks when the 'All' button is clicked", () => {
  render(<App />);

  const codeButton = screen.getByRole("button", { name: "Code" });
  const allButton = screen.getByRole("button", { name: "All" });

  fireEvent.click(codeButton);
  expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();

  fireEvent.click(allButton);
  expect(screen.getByText("Build a todo app")).toBeInTheDocument();
  expect(screen.getByText("Buy rice")).toBeInTheDocument();
});