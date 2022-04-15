import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";
import Select from "react-select";

function NavBar(props) {
  const { userLang, setUserLang, userTheme, setUserTheme } = props;

  console.log("props", props);

  const languages = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];

  const themes = [
    { value: "vs-dark", label: "Dark" },
    { value: "light", label: "Light" },
  ];

  const selectedLanguageLabel = "Python";
  const selectedThemeLabel = "Dark";
  // const selectedLanguageLabel = languages.find(
  //   (language) => language.value === userLang
  // );

  console.log(selectedLanguageLabel);

  // const selectedThemeLabel = themes.find(
  //   (theme) => theme.value === userTheme
  // ).label;

  console.log(selectedLanguageLabel, selectedThemeLabel);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">CodeRunner</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <div className="nav-item-select">
            <label>Choose Language: &nbsp;&nbsp;&nbsp;</label>
            <Select
              className="language-select"
              options={languages}
              value={userLang}
              onChange={(e) => {
                setUserLang(e.value);
              }}
              placeholder={selectedLanguageLabel}
            />
          </div>
          <Select
            className="theme-select"
            options={themes}
            value={userTheme}
            onChange={(e) => setUserTheme(e.value)}
            placeholder={selectedThemeLabel}
          ></Select>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
