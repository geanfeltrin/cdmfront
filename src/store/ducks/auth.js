import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ["email", "password"],
  signInSuccess: ["token"],
  signOut: null
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem("@cdm:token"),
  token: localStorage.getItem("@cdm:token") || null
});

/* Reducers */

export const success = (state, { token, roles }) => {
  console.log(token, roles);
  return state.merge({ signedIn: true, token });
};
export const logout = state => state.merge({ signOut: false, token: null });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout
});
