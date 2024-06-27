import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

function App() {
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  );
}

export default App;
