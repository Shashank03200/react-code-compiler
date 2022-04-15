import React from "react";
import Spinner from "./Spinner";

import "./IOContainer.css";

function IOContainer(props) {
  const { userInputChangeHandler, isCompiling, userOutput } = props;

  return (
    <div className="col-10 col-lg-5 d-flex flex-column  border border-left-1 border-success">
      <div className="user_std_input">
        <h5>User Input</h5>
        <textarea
          id="input"
          onChange={userInputChangeHandler}
          style={{ height: "40vh", width: "100%" }}
          className="App__InputTextarea"
        ></textarea>
      </div>

      <div className="user_std_output">
        <h5>Output</h5>
        {isCompiling ? (
          <Spinner />
        ) : (
          <textarea
            id="output"
            style={{ height: "40vh", width: "100%" }}
            className="App__OutputTextarea"
          >
            {userOutput}
          </textarea>
        )}
      </div>
    </div>
  );
}

export default IOContainer;
