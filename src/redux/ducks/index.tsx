import { combineReducers } from "redux";

import register from "./register";

const ducks = combineReducers({
  register,
});

export default ducks