import React, {useState} from "react";

import "../styles.css";
import {LightBulbSvg} from "./LightbulbSvg";

export const LightBulb = () => {
  /**
   * useState is a new way to use the capabilities that this.state would have offered.
   * The first value is the current state
   * The second value is a function used to update the state (first) value
   */

  // you must only call hooks at the top level of your function
  let [light, setLight] = useState(0);
  let [count, setCount] = useState(10);
  let [name, setName] = useState("Yomi");

  const setOff = () => setLight(0);
  const setOn = () => setLight(1);

  let fillColor = light === 1 ? "#ffbb73" : "#000000";

  return (
    <div className="App">
      <div>
        <LightBulbSvg fillColor={fillColor} />
      </div>

      <button onClick={setOff}>Off</button>
      <button onClick={setOn}>On</button>
    </div>
  );
};