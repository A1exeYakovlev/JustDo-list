export default function Info(taskList) {
    const taskCount = taskList.taskList.length;
    const finishedCount = taskList.taskList.filter((task) => task.finished).length;

    return (
        <div className="top__info">
            <div>Total: {taskCount}</div>
            <div>Finished: {finishedCount}</div>
        </div>
    )
}