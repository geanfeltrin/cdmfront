import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as toastr } from "react-redux-toastr";
import { reducer as auth } from "./auth";
import { reducer as category } from "./category";

export default history =>
  combineReducers({
    auth,
    category,
    toastr,
    router: connectRouter(history)
  });
