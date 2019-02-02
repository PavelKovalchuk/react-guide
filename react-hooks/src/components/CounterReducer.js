import React, {useReducer} from "react";
import {reducer} from "../reducer";

/**
 * An alternative to useState. Accepts a reducer of type (state, action) => newState,
 * and returns the current state paired with a dispatch method.
 * @param initialCount
 * @returns {XMLList}
 * @constructor
 */
export const CounterReducer = ({initialCount}) => {
  const [state, dispatch] = useReducer(reducer, {count: initialCount});
  return (
    <>
    Counter With Reducer Count: {state.count}
    <button onClick={() => dispatch({type: 'reset'})}>
      Reset
    </button>
    <button onClick={() => dispatch({type: 'increment'})}>+</button>
    <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
};