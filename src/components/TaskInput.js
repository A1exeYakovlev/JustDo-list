export default function TaskInput({ newTask, setNewTask, setTaskList }) {

    function handleNewTask(e) {
        setNewTask(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const currentTime = Date.now();
        setTaskList((cur) => [...cur, { id: currentTime, task: newTask, finished: false, created: currentTime }]);
        setNewTask("");
    }

    return (
        <form className="app__task-input-form" onSubmit={handleSubmit}>
            <label className="visuallyhidden" htmlFor="newTask">create a new task</label>
            <input
                className="app__task-input task-fz"
                id="newTask"
                type="text"
                value={newTask}
                placeholder="create a new task"
                onChange={handleNewTask}
            />
        </form>
    )
}