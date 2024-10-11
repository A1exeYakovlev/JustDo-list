import { TaskObj } from "../shared.types";
import Filter from "./Filter";
import Info from "./Info";
import RemoveBtn from "./RemoveBtn";

interface TopProps {
  taskList: TaskObj[] | [];
  setTaskList: React.Dispatch<React.SetStateAction<TaskObj[] | []>>;
}

export default function Top({ taskList, setTaskList }: TopProps) {
  return (
    <div className="top">
      <ul className="top__filters">
        <Filter filterType="active">Active</Filter>
        <Filter filterType="finished">Finished</Filter>
        <Filter filterType="all">All</Filter>
      </ul>
      <div className="top__side">
        <RemoveBtn setTaskList={setTaskList} />
        <Info taskList={taskList} />
      </div>
    </div>
  );
}
