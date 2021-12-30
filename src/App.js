import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import SaladResult from "./components/SaladResult/SaladResult";

const INITIAL_LEAF_VEGS = [
  "spinach",
  "lamb's lettuce",
  "rocket",
  "swiss chard",
  "lollo rosso",
];

function App() {
  const [leafVegs, setLeafVegs] = useState(INITIAL_LEAF_VEGS);
  const [generatedSalad, setGeneratedSalad] = useState("");

  const generateHandler = () => {
    setGeneratedSalad(() => {
      return leafVegs[Math.floor(Math.random() * (leafVegs.length + 1))];
    });
  };

  const addLeafVegHandler = () => {
    setLeafVegs("");
  };

  return (
    <div className="App">
      <button onClick={generateHandler}>Generate salad</button>
      <SaladResult result={generatedSalad} />
      <div>
        <label>Add leaf vegetable</label>
        <input></input>
        <button onClick={addLeafVegHandler}>Add</button>
      </div>
      {/* <ToppingsSelector /> */}
      <div>
        <logo></logo>
      </div>
    </div>
  );
}

export default App;
