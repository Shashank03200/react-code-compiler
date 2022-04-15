import React from "react";

import "./EditorHeader.css";

function EditorHeader({ compileCodeHandler }) {
  return (
    <div className="d-flex justify-content-between">
      <label htmlFor="solution">
        <i className="fas fa-code fa-fw fa-lg"></i>
        <span className="App__ContainerLabel">Editor </span>
      </label>

      <button
        className="btn btn-danger ml-2 mr-2 "
        onClick={compileCodeHandler}
      >
        <i className="fas fa-cog fa-fw"></i> Run{" "}
      </button>
    </div>
  );
}

export default EditorHeader;
