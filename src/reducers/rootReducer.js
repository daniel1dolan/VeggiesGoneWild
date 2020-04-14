//Combines all reducers into one.

import { combineReducers } from "redux";

//Import reducers and also put reducer keys and values
//inside combineReducers.
import templateReducer from "./templateReducer";

export default combineReducers({
  reduxData: templateReducer,
});
