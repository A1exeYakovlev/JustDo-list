import { useParams } from "react-router-dom";
import Task from "./Task";
import { TaskObj } from "../shared.types";

interface TaskListProps {
  taskList: TaskObj[] | [];
  setTaskList: React.Dispatch<React.SetStateAction<TaskObj[] | []>>;
}

export default function TaskList({ taskList, setTaskList }: TaskListProps) {
  const { filterBy = "all" } = useParams();
  let filteredTaskList: TaskObj[] | [] = [];
  if (filterBy === "active")
    filteredTaskList = taskList.filter((task) => !task.finished);
  if (filterBy === "finished")
    filteredTaskList = taskList.filter((task) => task.finished);
  if (filterBy === "all" || !filterBy) filteredTaskList = taskList;

  return (
    <ul className="app__tasklist">
      {filteredTaskList.map((task, i) => (
        <Task task={task} setTaskList={setTaskList} key={task.id || i} />
      ))}
    </ul>
  );
}
