import { combineReducers } from "redux";
import spots from "./spotsReducer";

export const rootReducer = combineReducers({
  spots,
});

export default rootReducer;
