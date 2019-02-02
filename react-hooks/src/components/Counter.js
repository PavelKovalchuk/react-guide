import React from "react";
import {useCounter} from "./CustomHook";

export const Counter = () => {
  const [myCount, { increment, decrement }] = useCounter({ initialState: 0 });
  return (
    <div>
      <p>{myCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};