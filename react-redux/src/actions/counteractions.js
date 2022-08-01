// increment action
export const incrementAction = () => {
  return {
    type: "INCREMENT",
    payload: 1,
  };
};

// decrement action
export const decrementAction = () => {
  return {
    type: "DECREMENT",
    payload: 1,
  };
};