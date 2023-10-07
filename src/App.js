import "./App.css";
import Header from "./Header";
import CreateCardButton from "./CreateCardButton";
import { useState } from "react";
import CardWrapper from "./CardWrapper";

function App() {
  // const [isClickedCreate, setIsClickedCreate] = useState(false);
  // const [cardTitle, setCardTitle] = useState();
  // const createCard = () => {
  //   setIsClickedCreate(true);
  // };
  // const getCardTitle = (newValue) => {
  //   setCardTitle(newValue);
  // };
  const [array, setArray] = useState([0]);
  const [keyCard, setKeyCard] = useState(1);

  const changeKey = () => {
    setKeyCard(keyCard + 1);
  };

  function clickedCreateButton() {
    setArray([...array, keyCard]);
    changeKey();
  }

  function cancelCreateCard(event) {
    let currentArray = array;
    let removeItemId = Number(
      event.currentTarget.parentNode.parentNode.parentNode.id
    );
    const newArray = currentArray.filter((item) => item !== removeItemId);
    setArray(newArray);
  }

  function deleteCard(event) {
    let currentArray = array;
    let removeItemId = Number(event.currentTarget.parentNode.parentNode.id);
    const newArray = currentArray.filter((item) => item !== removeItemId);
    setArray(newArray);
  }

  return (
    <div className="App">
      <Header />
      <CreateCardButton clickedCreateButton={clickedCreateButton} />
      <CardWrapper
        array={array}
        cancelCreateCard={cancelCreateCard}
        deleteCard={deleteCard}
      />
    </div>
  );
}

export default App;
