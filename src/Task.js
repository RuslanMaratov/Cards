import React from "react";
import "./Task.css";
import { ImCancelCircle } from "react-icons/im";

export default function Task({ cardTitle, deleteCard }) {
  return (
    <div className="taskContainer">
      <ImCancelCircle className="cancelButton" onClick={deleteCard} />
      <div className="taskTitle">{cardTitle}</div>
      <input className="taskInput" />
    </div>
  );
}
