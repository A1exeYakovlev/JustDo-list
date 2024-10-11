import { TaskObj } from "../shared.types";

interface InfoProps {
  taskList: TaskObj[] | [];
}

export default function Info({ taskList }: InfoProps) {
  const taskCount = taskList.length;
  const finishedCount = taskList.filter((task) => task.finished).length;

  return (
    <div className="top__info top-fz">
      <div>Total: {taskCount}</div>
      <div>Finished: {finishedCount}</div>
    </div>
  );
}
