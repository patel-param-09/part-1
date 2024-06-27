import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

function App() {
  const App = () => {
    const course = "Half Stack application development";
    const part1 = {
      name: "Fundamentals of React",
      exercises: 10,
    };
    const part2 = {
      name: "Using props to pass data",
      exercises: 7,
    };
    const part3 = {
      name: "State of a component",
      exercises: 14,
    };

    return (
      <div>
        <Header course={course} />
        <Content />
        <Total />
      </div>
    );
  };
}

export default App;
