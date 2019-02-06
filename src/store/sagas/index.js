import { all, takeLatest } from "redux-saga/effects";

import { signIn, signOut } from "./auth";
import { AuthTypes } from "../ducks/auth";

import { getCategory } from "./category";
import { CategoryTypes } from "../ducks/category";

import { getPost } from "./post";
import { PostTypes } from "../ducks/post";

import { getUsers, createUsers } from "./users";
import { UsersTypes } from "../ducks/users";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(CategoryTypes.GET_CATEGORY_REQUEST, getCategory),
    takeLatest(CategoryTypes.SELECT_CATEGORY, getCategory),

    takeLatest(CategoryTypes.SELECT_CATEGORY, getPost),
    takeLatest(PostTypes.GET_POST_REQUEST, getPost),

    takeLatest(UsersTypes.GET_USERS_REQUEST, getUsers),
    takeLatest(UsersTypes.CREATE_USERS_REQUEST, createUsers)
  ]);
}
