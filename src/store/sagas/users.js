import { call, put } from "redux-saga/effects";
import { actions as toastrActions } from "react-redux-toastr";
import api from "../../services/api";

import UsersAction from "../ducks/users";

export function* getUsers() {
  const response = yield call(api.get, "users");

  yield put(UsersAction.getUsersSuccess(response.data));
}

export function* createUsers({ username, email, password, roles }) {
  try {
    const response = yield call(api.post, "users", {
      username,
      email,
      password,
      roles
    });

    yield put(UsersAction.createUsersSuccess(response.data));
    yield put(UsersAction.closeUsersModal());
  } catch (error) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Erro na Operação",
        message: "Houve um erro , tente novamente"
      })
    );
  }
}

export function* changePassword ({id, password}){
  console.log('id' , id)
  try{
    const response = yield call(api.put, `users/${id}`, {
      password      
    })
    console.log(response)
    yield put(UsersAction.changePasswordSuccess(response.data));
    // yield put(push("/"))
    yield put(
      toastrActions.add({
        type: "success",
        title: "Senha trocada com sucesso",
        message: "Senha trocada com sucesso"
      })
    );
  }
  catch (error){
    yield put(
      toastrActions.add({
        type: "error",
        title: "Erro na Operação",
        message: "Houve um erro , tente novamente"
      })
    )
  }

}
