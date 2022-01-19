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

const INITIAL_TOPPINGS = [
  "dryroasted chickpeas with spices",
  "cashews",
  "provencal croutons",
  "rye",
  "dried mango",
  "dried berries mix",
  "peanuts",
  "wood ear mushrooms",
  "roasted king oyster mushroom",
  "roasted mushroom",
  "roasted potato wedges",
];

const INITIAL_VEG_FRUITS = [
  "diced beets",
  "raspberries",
  "roasted carrots",
  "roasted bell pepper",
  "strawberries",
  "apple slices",
  "roasted aubergine",
];

const INITIAL_PROTEINS = [
  "bacon",
  "roasted chicken",
  "salmon",
  "cottage cheese",
  "Feta cheese",
  "Manchego cheese",
  "vegan bacon",
  "spiced lentils",
  "shrimps",
  "tempeh",
];

function App() {
  const [leafVegs, setLeafVegs] = useState(INITIAL_LEAF_VEGS);
  const [toppings, setToppings] = useState(INITIAL_TOPPINGS);
  const [vegFruits, setVegFruits] = useState(INITIAL_VEG_FRUITS);
  const [proteins, setProteins] = useState(INITIAL_PROTEINS);
  const [generatedSalad, setGeneratedSalad] = useState("");

  const generateHandler = () => {
    setGeneratedSalad(() => {
      return `Salad of ${
        leafVegs[Math.floor(Math.random() * leafVegs.length)]
      } with ${toppings[Math.floor(Math.random() * toppings.length)]}, ${
        vegFruits[Math.floor(Math.random() * vegFruits.length)]
      } and ${proteins[Math.floor(Math.random() * proteins.length)]}.`;
    });
  };

  const addLeafVegHandler = () => {
    setLeafVegs("");
  };

  const addToppingsHandler = () => {
    setToppings("");
  };

  const addVegFruitsHandler = () => {
    setVegFruits("");
  };

  const addProteinsHandler = () => {
    setProteins("");
  };

  return (
    <div className="App">
      <button onClick={generateHandler}>Generate salad</button>
      <SaladResult result={generatedSalad} />
      <div>
        <label>leaf vegetable</label>
        <input></input>
        <button onClick={addLeafVegHandler}>Add leaf vegetable</button>
      </div>
      <div>
        <label>topping</label>
        <input></input>
        <button onClick={addToppingsHandler}>Add topping</button>
      </div>
      <div>
        <label>veg/fruit</label>
        <input></input>
        <button onClick={addVegFruitsHandler}>Add veg/fruit</button>
      </div>
      <div>
        <label>protein</label>
        <input></input>
        <button onClick={addProteinsHandler}>Add protein</button>
      </div>
      {/* <ToppingsSelector /> */}
      <div>
        <logo></logo>
      </div>
    </div>
  );
}

export default App;
