import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Top from "./components/Top";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <BrowserRouter>
      <div className="app">
        <h1 className="heading">
          Just<span>Do</span> List
        </h1>
        <div className="app__wrap">
          <Top taskList={taskList} />
          <TaskInput newTask={newTask} setNewTask={setNewTask} setTaskList={setTaskList} />
          <Routes>
            <Route index element={<TaskList taskList={taskList} setTaskList={setTaskList} />} />
            <Route path="/:filterBy" element={<TaskList taskList={taskList} setTaskList={setTaskList} />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}


