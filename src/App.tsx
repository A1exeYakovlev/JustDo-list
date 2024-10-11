import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Top from "./components/Top";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { TaskObj } from "./shared.types";

export default function App() {
  const [newTask, setNewTask] = useState<TaskObj | null>(null);
  const [taskList, setTaskList] = useState<TaskObj[] | []>([]);

  return (
    <div className="app">
      <h1 className="heading">
        Just<span>Do</span> List
      </h1>
      <HashRouter>
        <div className="app__wrap">
          <Top taskList={taskList} setTaskList={setTaskList} />
          <TaskInput
            newTask={newTask}
            setNewTask={setNewTask}
            setTaskList={setTaskList}
          />
          <Routes>
            <Route index element={<Navigate to="all" />} />
            <Route
              path="/:filterBy"
              element={
                <TaskList taskList={taskList} setTaskList={setTaskList} />
              }
            />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}
