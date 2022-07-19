import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementAction, decrementAction } from "../actions/counteractions";

const Counter = () => {
  //   let [count, setCount] = useState(0);
  //   const increment = () => {
  //     setCount((count += 1));
  //   };
  //   const decrement = () => {
  //     setCount((count -= 1));
  //   };
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter Page</h1>
      <div className="d-flex justify-content-center">
        <i
          className="bi bi-file-minus me-2"
          type="button"
          onClick={() => {
            dispatch(decrementAction());
          }}
        ></i>
        <p>{count}</p>
        <i
          className="bi bi-file-plus ms-2"
          type="button"
          onClick={() => {
            dispatch(incrementAction());
          }}
        ></i>
      </div>
    </div>
  );
};

export default Counter;