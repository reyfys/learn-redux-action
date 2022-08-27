import { INCREMENT, DECREMENT, RESET } from "../types";
import TYPES from "../types";

const initialState = {
  total: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.INCREMENT:
      return {
        ...state, //kasih ...state supaya semua data lain selain "total" kepanggil juga
        total: action.payload,
      };

    case TYPES.DECREMENT:
      return {
        ...state,
        total: action.payload,
      };

    case TYPES.RESET:
      return {
        ...state,
        total: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
