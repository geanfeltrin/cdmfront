import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import PostAction from '../ducks/post';

export function* getPost({ id, title }) {
  let search = '&title';
  if (title) {
    search = `&title=${title}`;
  }
  const response = yield call(api.get, `filter/${id}`);

  yield put(PostAction.getPostSuccess(response.data));
}
