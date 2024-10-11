import { FormEvent, InputChangeEvent, TaskObj } from "../shared.types";

interface TaskInputProps {
  newTask: TaskObj | null;
  setNewTask: React.Dispatch<React.SetStateAction<TaskObj | null>>;
  setTaskList: React.Dispatch<React.SetStateAction<TaskObj[] | []>>;
}

export default function TaskInput({
  newTask,
  setNewTask,
  setTaskList,
}: TaskInputProps) {
  function handleNewTask(e: InputChangeEvent) {
    const currentTime = Date.now();

    setNewTask({
      id: currentTime,
      task: e.target.value,
      finished: false,
      created: currentTime,
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (newTask) {
      setTaskList((cur) => [...cur, newTask]);

      setNewTask(null);
    }
  }

  return (
    <form className="app__task-input-form" onSubmit={handleSubmit}>
      <label className="visuallyhidden" htmlFor="newTask">
        create a new task
      </label>
      <input
        className="app__task-input task-fz"
        id="newTask"
        type="text"
        value={newTask?.task || ""}
        placeholder="create a new task"
        onChange={handleNewTask}
      />
    </form>
  );
}
