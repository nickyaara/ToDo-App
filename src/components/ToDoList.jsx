import React from "react";

export default function ToDoList({ text, onSmash, id }) {
  return (
    <div onClick={() => onSmash(id)}>
      <li>{text}</li>
    </div>
  );
}
