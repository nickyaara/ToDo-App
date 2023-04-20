import React from "react";

export default function Button({ onSmash }) {
  return (
    <button id="add-btn" onClick={onSmash}>
      ADD
    </button>
  );
}
