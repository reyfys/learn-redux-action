import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, DECREMENT, RESET } from "../Redux/types";
import TYPES from "../Redux/types";

const CounterAction = () => {
  const dispatch = useDispatch();
  const { counterReducer } = useSelector((state) => state);

  const handlePlus = () => {
    const result = counterReducer.total + 1;

    dispatch({
      type: TYPES.INCREMENT,
      payload: result,
    });
  };

  const handleMinus = () => {
    const result = counterReducer.total - 1;

    dispatch({
      type: TYPES.DECREMENT,
      payload: result,
    });
  };

  const handleReset = () => {
    dispatch({
      type: TYPES.RESET,
    });
  };

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterAction;
