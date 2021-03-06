import React, {useState, useEffect, useContext} from "react";

import "../styles.css";
import {LightBulbSvg} from "./LightbulbSvg";
import {LightBulbContext} from "./LightBulbContext";


export const LightBulb = () => {
  /**
   * useState is a new way to use the capabilities that this.state would have offered.
   * The first value is the current state
   * The second value is a function used to update the state (first) value
   */

  // you must only call hooks at the top level of your function
  const [light, setLight] = useState(0);
  const [names, setNames] = useState([]);
  const [joke, setJoke] = useState(null);
  /**
   * The useContext() function accepts a context object,
   * which is initially returned from React.createContext(),
   * and then returns the current context value.
   */
  const nameValue = useContext(LightBulbContext);

  /**
   * The useEffect Hook lets you perform side effects in function components.
   * Side effects can be API calls, Updating DOM, subscribing to event listeners.
   *
   * pass our effect "action" as an anonymous function as the first argument to useEffect.
   * You can skip effects by using the second argument to useEffect.
   * The second argument to useEffect is a list of variables we want to "watch"
   * and then we will only re-run the effect when one of those values changes.
   *
   * In the above code example, notice that we pass an empty array as the second argument.
   * That is us telling React that we only want to call this effect when the component is mounted.
   */
  const region = light === 1 ? "ukraine" : "england";
  const postId = light === 1 ? "1" : "2";
  useEffect(() => {
    fetch(`https://uinames.com/api/?amount=25&region=${region}`)
      .then(response => response.json())
      .then(data => {
        setNames(data);
      });
  }, [region]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => {
        setJoke(data.title);
      });
  }, [region]);

  const setOff = () => setLight(0);
  const setOn = () => setLight(1);

  let fillColor = light === 1 ? "#ffbb73" : "#000000";
  console.log('___ RENDER ___');

  return (
    <div className="App">
      <h1>{nameValue}</h1>
      <div>
        <LightBulbSvg fillColor={fillColor} />
      </div>

      <button onClick={setOff}>Off</button>
      <button onClick={setOn}>On</button>

      {joke && <h2>{joke}</h2>}

      <div>
        {names.map((item, i) => (
          <div key={i}>
            {item.name} {item.surname}
          </div>
        ))}
      </div>
    </div>
  );
};