import React from "react";
import TaskItemElem from "./TaskItemElem";

export default function TaskItem({ taskList, deleteTaskItem }) {
  return (
    <div>
      {taskList.map((item) => (
        <TaskItemElem key={item} item={item} deleteTaskItem={deleteTaskItem} />
      ))}
    </div>
  );
}
