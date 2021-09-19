import * as types from "../types/playerTypes";

const initialState = {
  player: null,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLAYER:
      return {
        ...state,
        player: action.payload,
      };
    case types.BUY_BUILDING:
      return {
        ...state,
        player: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
