import React, { useState } from "react";
import axios from "axios";

function useCompile() {
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
    setUserOutput("");
    setIsCompiling(true);
    if (userCode === ``) {
      setError("No code available");
    }

    const response = await axios({
      method: "POST",
      url: "https://code-compiler-hire.herokuapp.com/compile",
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

  return {
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
  };
}

export default useCompile;
