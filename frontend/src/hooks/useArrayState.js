import { useState } from "react";

export const useArrayState = (initianalState = []) => {
  const [state, setState] = useState(initianalState);
  const add = (newValue) => {
    setState((currentState) => [...currentState, newValue]);
  };
  const remove = (removeValue) => {
    setState((currentState) => {
      const newState = currentState.filter((item) => item !== removeValue);
      return newState;
    });
  };
  return [state, { add, remove }];
};
