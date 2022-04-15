import React from "react";
import "./Switch.css";

function Switch() {
  return (
    <div className="Switch__Wrapper">
      <button className="Switch__EditorBtn btn btn-success">Editor</button>
      <button className="Switch__InputWindowBtn btn btn-secondary">
        Input
      </button>
    </div>
  );
}

export default Switch;
