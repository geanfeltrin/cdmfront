import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import PostAction from "../ducks/post";

export function* getPost({ id }) {
  const response = yield call(api.get, `filter/${id}`);

  yield put(PostAction.getPostSuccess(response.data));
}
