import { combineReducers } from "redux";
import routeCaptain from "./routeCaptain";

const rootReducer = combineReducers({
  route: routeCaptain,
});

export default rootReducer;
