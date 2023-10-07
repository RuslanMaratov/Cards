import React from "react";
import "./CreateCardButton.css";

export default function CreateCardButton({ clickedCreateButton }) {
  return (
    <button className="createCardButton" onClick={clickedCreateButton}>
      Создать новую карту
    </button>
  );
}
