const counterReducer = (intialState = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return intialState + action.payload;
    case "DECREMENT":
      return intialState - action.payload;
    default:
      return intialState;
  }
};

export default counterReducer;