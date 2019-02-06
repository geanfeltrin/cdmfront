import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import UsersAction from "../ducks/users";

export function* getUsers() {
  const response = yield call(api.get, "users");

  yield put(UsersAction.getUsersSuccess(response.data));
}
