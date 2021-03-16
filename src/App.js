import React from "react";
import "./App.css";

import FlowerBorder from "./components/FlowerBorder";
import Seedlings from "./components/Seedlings";
import Sunshine from "./components/Sunshine";

function App() {
  return (
    <div className="App">
      <FlowerBorder />
      <Seedlings />
      <Sunshine />
    </div>
  );
}

export default App;
