import Card from "react-bootstrap/Card";
import "./Card.css";
import { Fragment, useState } from "react";
import Task from "./Task";

function CardComponent({ cancelCreateCard, deleteCard }) {
  const [inputValue, setInputValue] = useState();
  let cardTitle = inputValue;
  const [isClickedCreate, setIsClickedCreate] = useState(false);
  const createCard = () => {
    setIsClickedCreate(true);
  };

  return (
    <Fragment>
      {!isClickedCreate ? (
        <Card className="card">
          <Card.Title className="cardTitle">
            Введите название карточки.
          </Card.Title>
          <input
            type="text"
            className="cardInput"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <div className="cardButtonsWrapper">
            <button className="cardCancelButton" onClick={cancelCreateCard}>
              ОТМЕНА
            </button>
            <button className="cardCreateButton" onClick={createCard}>
              СОЗДАТЬ
            </button>
          </div>
        </Card>
      ) : (
        <Task cardTitle={cardTitle} deleteCard={deleteCard} />
      )}
    </Fragment>
  );
}

export default CardComponent;
