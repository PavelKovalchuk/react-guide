import React, {useState} from "react";

/**
 * to share logic across multiple components by making a custom hook.
 * stores the logic of our custom hook.
 * can use other Hooks
 *
 *
 * @param initialState
 * @returns {[null,null]}
 * @constructor
 */
export const useCounter = ({ initialState }) => {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  /**
   * The first item is the current value of the hook and
   The second item is an object, containing functions used to interact with the hook.
   */
  return [count, { increment, decrement, setCount }];
};