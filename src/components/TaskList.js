
import Task from "./Task";

export default function TaskList({ filteredTaskList, setTaskList }) {

    return (
        <ul className="app__tasklist">{
            filteredTaskList.map((task, i) => <Task task={task} setTaskList={setTaskList} key={task.id || i} />
            )
        }</ul>
    )
}