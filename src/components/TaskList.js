
import Task from "./Task";

export default function TaskList({ filteredTaskList, setTaskList }) {

    return (
        <ul className="app__tasklist">{
            filteredTaskList.map((task, i) => <Task taskContent={task.task} taskId={task.id} setTaskList={setTaskList} key={task.id || i} />
            )
        }</ul>
    )
}