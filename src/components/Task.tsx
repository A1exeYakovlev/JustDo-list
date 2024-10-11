import { useState } from "react";
import { TaskObj } from "../shared.types";

interface TaskProps {
  task: TaskObj;
  setTaskList: React.Dispatch<React.SetStateAction<TaskObj[] | []>>;
}

export default function Task({ task, setTaskList }: TaskProps) {
  const [finished, setFinished] = useState(task.finished);

  function handleCheckbox() {
    setFinished((finished) => !finished);
    setTaskList((curTaskList) =>
      curTaskList.map((curTask) =>
        curTask.id === task.id ? { ...curTask, finished: !finished } : curTask
      )
    );
  }

  return (
    <>
      {task.id && (
        <li className="tasklist__row">
          <input
            type="checkbox"
            className="app__task-checkbox"
            checked={finished}
            value="finished"
            onChange={handleCheckbox}
          ></input>
          <div className="app__task-content task-fz">{task.task}</div>
        </li>
      )}
    </>
  );
}
