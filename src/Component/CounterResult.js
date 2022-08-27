import React from "react";
import { useSelector } from "react-redux";

const CounterResult = () => {
  const { counterReducer } = useSelector((state) => state);

  return (
    <div>
      <h1>{counterReducer.total}</h1>
    </div>
  );
};

export default CounterResult;
