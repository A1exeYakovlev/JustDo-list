import { TaskObj } from "../shared.types";

interface RemoveBtnProps {
  setTaskList: React.Dispatch<React.SetStateAction<TaskObj[] | []>>;
}

export default function RemoveBtn({ setTaskList }: RemoveBtnProps) {
  function handleRemove() {
    setTaskList((cur) => {
      if (cur.length > 0) {
        return cur.filter((taskObj) => !taskObj.finished);
      } else return cur;
    });
  }

  return (
    <button onClick={handleRemove} className="top__remove-btn">
      {"\u274C"} Remove finished tasks
    </button>
  );
}
