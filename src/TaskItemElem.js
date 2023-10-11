import React, { useState } from "react";
import { ImCheckmark2 } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import "./TaskItemElem.css";

export default function TaskItemElem({ item, deleteTaskItem }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const finishTask = (event) => {
    if (isCompleted === false) {
      event.target.previousSibling.className = "taskNameLineThrough";
      event.target.firstChild.className.baseVal = "checkMarkCompleted";
      event.target.parentNode.className = "taskItemCompleted";
      setIsCompleted(true);
    } else {
      event.target.previousSibling.className = "taskName";
      event.target.firstChild.className.baseVal = "checkMark";
      event.target.parentNode.className = "taskItem";
      setIsCompleted(false);
    }
  };

  return (
    <div className="taskItem">
      <div className="taskName">{item}</div>
      <div className="checkMarkWrapper" onClick={finishTask}>
        <ImCheckmark2 className="checkMark" />
      </div>
      <div className="trashWrapper" onClick={deleteTaskItem}>
        <FaTrash className="trash" />
      </div>
    </div>
  );
}
