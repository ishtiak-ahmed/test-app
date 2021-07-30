import { combineReducers } from "redux";
import courseReducers from "./courseReducers";

export default combineReducers({
  courses: courseReducers,
});
