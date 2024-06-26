import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Top from "./components/Top";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [filterBy, setFilterBy] = useState("all");

  let filteredTaskList;
  if (filterBy === "active") filteredTaskList = taskList.filter(task => !task.finished);
  if (filterBy === "finished") filteredTaskList = taskList.filter(task => task.finished);
  if (filterBy === "all") filteredTaskList = taskList;

  return (
    <div className="app">
      <h1 className="heading">
        Just<span>Do</span> List
      </h1>
      <div className="app__wrap">
        <Top filterBy={filterBy} setFilterBy={setFilterBy} taskList={taskList} />
        <TaskInput newTask={newTask} onNewTask={setNewTask} setTaskList={setTaskList} />
        <TaskList filteredTaskList={filteredTaskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
}


