import { useState } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";

import "./App.css";
import NavBar from "./components/NavBar";

import Switch from "./components/Switch";
import IOContainer from "./components/IOContainer";
import EditorHeader from "./components/EditorHeader";

function App() {
  const [userCode, setUserCode] = useState("");
  const [userLang, setUserLang] = useState("python");
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState("");

  const [userTheme, setUserTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(18);

  const [isCompiling, setIsCompiling] = useState(false);
  const [error, setError] = useState("");

  const options = {
    fontSize,
  };

  const compileCodeHandler = async () => {
    setIsCompiling(true);
    if (userCode === ``) {
      setError("No code available");
    }

    const response = await axios({
      method: "POST",
      url: "/compile",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        code: userCode,
        language: userLang,
        input: userInput,
      },
    });
    setIsCompiling(false);
    const codeCompilationResult = response.data;
    setUserOutput(codeCompilationResult.output);
  };

  const userInputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <>
      <NavBar
        userCode={userCode}
        setUserCode={setUserCode}
        userLang={userLang}
        setUserLang={setUserLang}
        userTheme={userTheme}
        setUserTheme={setUserTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
      <Switch />
      <div className="row ">
        <div className="col-12 col-lg-7 ml-4">
          <EditorHeader compileCodeHandler={compileCodeHandler} />
          <Editor
            options={options}
            className="App__Editor"
            theme={userTheme}
            language={userLang}
            defaultLanguage="python"
            defaultValue={"# Enter your code here"}
            onChange={(value) => {
              setUserCode(value);
            }}
          />
        </div>
        <IOContainer
          userInputChangeHandler={userInputChangeHandler}
          isCompiling={isCompiling}
          userOutput={userOutput}
        />
      </div>
    </>
  );
}

export default App;
