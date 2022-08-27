import React from "react";
import CounterAction from "./CounterAction";
import CounterResult from "./CounterResult";

const counter = () => {
  return (
    <div>
      <CounterResult />
      <CounterAction />
    </div>
  );
};

export default counter;
