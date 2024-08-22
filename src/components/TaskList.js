import { useParams } from "react-router-dom";
import Task from "./Task";

export default function TaskList({ taskList, setTaskList }) {

    const { filterBy = "all" } = useParams();
    let filteredTaskList = [];
    if (filterBy === "active") filteredTaskList = taskList.filter(task => !task.finished);
    if (filterBy === "finished") filteredTaskList = taskList.filter(task => task.finished);
    if (filterBy === "all" || !filterBy) filteredTaskList = taskList;

    return (
        <ul className="app__tasklist">{
            filteredTaskList.map((task, i) => <Task task={task} setTaskList={setTaskList} key={task.id || i} />
            )
        }</ul>
    )
}