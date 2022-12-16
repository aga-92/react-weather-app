import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by Aga Jackiewicz and is{" "}
        <a
          href="https://github.com/aga-92/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>{" "}
        on GitHub
      </footer>
    </div>
  );
}
