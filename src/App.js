import React from "react";
import Router from "./router/Router";
import useLocalStorage from "use-local-storage";
import "./App.css";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.style = `background-color: ${
      theme === "light" ? "black" : "white"
    };`;
  };
  return (
    <div className="app" data-theme={theme}>
      <Router switchTheme={switchTheme} theme={theme} />
    </div>
  );
}

export default App;
