import { render } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TASKS } from "../data";

const tasksWithIds = TASKS.map((task, index) => ({
  ...task,
  id: index + 1,
}));

test("displays all items when initially rendered", () => {
  const { container } = render(<TaskList tasks={tasksWithIds} />);
  expect(container.querySelectorAll(".task")).toHaveLength(tasksWithIds.length);
});