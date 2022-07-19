import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const count = useSelector((state) => state.count);
  return (
    <div>
      <h1>Test Page</h1>
      <h3>Count: {count} </h3>
    </div>
  );
};

export default Test;