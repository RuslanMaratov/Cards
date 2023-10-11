import React, { useState } from "react";
import "./Task.css";
import { ImCancelCircle } from "react-icons/im";
import TaskItem from "./TaskItem";

export default function Task({ cardTitle, deleteCard }) {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  const onKeyDown = (keyPress) => {
    if (keyPress.keyCode === 13) {
      if (taskList.includes(taskInput) !== true) {
        setTaskList([...taskList, taskInput]);
        keyPress.target.value = "";
      } else {
        alert(`"${taskInput}" - эта задача уже существует!`);
        keyPress.target.value = "";
      }
    }
  };

  const deleteTaskItem = (event) => {
    const removeItem = event.target.previousSibling.previousSibling.innerHTML;
    const newTaskList = taskList.filter((item) => item !== removeItem);
    setTaskList(newTaskList);
  };

  return (
    <div className="taskContainer">
      <ImCancelCircle className="cancelButton" onClick={deleteCard} />
      <div className="taskTitle">{cardTitle}</div>
      <input
        className="taskInput"
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
      <TaskItem taskList={taskList} deleteTaskItem={deleteTaskItem} />
    </div>
  );
}
