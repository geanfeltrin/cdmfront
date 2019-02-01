import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getCategoryRequest: null,
  getCategorySuccess: ["data"],
  selectCategory: ["category"]
});

export const CategoryTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  active: JSON.parse(localStorage.getItem("@cdm:category")) || null
});

/* Reducers */

export const getSuccess = (state, { data }) => state.merge({ data });

export const selectCategory = (state, { category }) => {
  localStorage.setItem("@Cdm:category", JSON.stringify(category));

  return state.merge({ category });
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CATEGORY_SUCCESS]: getSuccess,
  [Types.SELECT_CATEGORY]: selectCategory
});
