import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import CategoryAction from "../ducks/category";

export function* getCategory() {
  const response = yield call(api.get, "category");

  yield put(CategoryAction.getCategorySuccess(response.data));
}
