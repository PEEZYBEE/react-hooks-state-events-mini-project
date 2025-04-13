// src/__tests__/TaskList.test.js
import { render } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TASKS } from "../data";

// Add IDs to TASKS to match App.js behavior
const tasksWithIds = TASKS.map((task, index) => ({
  ...task,
  id: index + 1,
}));

test("displays all items when initially rendered", () => {
  const { container } = render(<TaskList tasks={tasksWithIds} />);
  expect(container.querySelectorAll(".task")).toHaveLength(tasksWithIds.length);
});