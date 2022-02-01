import { combineReducers } from "redux";
import articlesRouteManager from "./articlesRouteManager";

const rootReducer = combineReducers({
  articles: articlesRouteManager,
});

export default rootReducer;
