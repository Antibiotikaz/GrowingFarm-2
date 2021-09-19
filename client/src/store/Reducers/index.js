import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
const rootReducer = combineReducers({
  userData: playerReducer,
});

export default rootReducer;
