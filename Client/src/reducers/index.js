import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import roomReducer from "./roomReducer";
import movieReducer from "./movieReducer";
import seanseReducer from "./seanseReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  rooms: roomReducer,
  movies: movieReducer,
  seanses: seanseReducer,
});
