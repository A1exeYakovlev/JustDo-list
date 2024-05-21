import { useState } from "react";

export default function Task({ taskId, taskContent, setTaskList }) {
    const [finished, setFinished] = useState(false);

    function handleCheckbox() {
        setFinished((finished) => !finished)
        setTaskList((curTaskList) => curTaskList.map((curTask) => curTask.id === taskId ? { ...curTask, finished: !finished } : curTask))
    }

    return (
        <>
            {taskId && (
                <li className="tasklist__row">
                    <input type="checkbox" className="app__task-checkbox" checked={finished} value="finished" onChange={handleCheckbox}></input>
                    <div className="app__task-content">{taskContent}</div>
                </li>)
            }
        </>
    )

}