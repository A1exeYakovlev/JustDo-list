export default function TaskInput({ newTask, onNewTask, setTaskList }) {

    function handleNewTask(e) {
        onNewTask(e.target.value)

    }

    function handleSubmit(e) {
        e.preventDefault();
        const currentTime = Date.now();
        setTaskList((cur) => [...cur, { id: currentTime, task: newTask, finished: false, created: currentTime }]);
        onNewTask("");
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
        </form >
    )
}