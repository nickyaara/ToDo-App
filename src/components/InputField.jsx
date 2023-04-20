import React from "react";

export default function InputField({ trackChange, pushItem, itemValue }) {
  return (
    <input
      onChange={trackChange}
      onKeyDown={(event) => event.key === "Enter" && pushItem()}
      id="input-field"
      type="text"
      placeholder="Add a Todo item.!"
      value={itemValue}
    />
  );
}
