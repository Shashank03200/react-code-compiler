import { useState } from "react";

import Editor from "@monaco-editor/react";

import "./App.css";
import NavBar from "./components/NavBar";

import Switch from "./components/Switch";
import IOContainer from "./components/IOContainer";
import EditorHeader from "./components/EditorHeader";
import useCompile from "./hooks/useCompile";

function App() {
  const {
    userCode,
    setUserCode,
    userLang,
    setUserLang,
    userInput,
    setUserInput,
    userOutput,
    setUserOutput,
    userTheme,
    setUserTheme,
    isCompiling,
    compileCodeHandler,
    userInputChangeHandler,
    options,
    fontSize,
    setFontSize,
  } = useCompile();

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
