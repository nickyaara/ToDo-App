import "./styles.css";
import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import Button from "./components/Button";
import InputField from "./components/InputField";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);

  function handleChange(event) {
    setErrorMsg(false);
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText === "") {
      setErrorMsg(true);
    } else {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  }
  function deleteList(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <h1>ToDo List</h1>
      <div id="input-area">
        <InputField
          trackChange={handleChange}
          pushItem={addItem}
          itemValue={inputText}
        />
        <Button onSmash={addItem} />
      </div>
      <p id="error-msg">{errorMsg && "Empty Input Not Allowed"}</p>
      <div id="list-items">
        <h3>List of Task</h3>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoList
              key={index}
              id={index}
              text={todoItem}
              onSmash={deleteList}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
