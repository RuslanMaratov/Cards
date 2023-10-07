import React from "react";
import CardComponent from "./Card";

export default function CardWrapper({ array, cancelCreateCard, deleteCard }) {
  return (
    <div className="cardWrapper">
      {array.map((elem) => (
        <div className="cardContainer" key={elem} id={elem}>
          <CardComponent
            cancelCreateCard={cancelCreateCard}
            deleteCard={deleteCard}
          />
        </div>
      ))}
    </div>
  );
}
