import { all, takeLatest } from "redux-saga/effects";

import { signIn } from "./auth";
import { AuthTypes } from "../ducks/auth";

import { getCategory } from "./category";
import { CategoryTypes } from "../ducks/category";

import { getPost } from "./post";
import { PostTypes } from "../ducks/post";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),

    takeLatest(CategoryTypes.GET_CATEGORY_REQUEST, getCategory),
    takeLatest(CategoryTypes.SELECT_CATEGORY, getCategory),

    takeLatest(CategoryTypes.SELECT_CATEGORY, getPost),

    takeLatest(PostTypes.GET_POST_REQUEST, getPost)
  ]);
}
