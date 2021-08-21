import { ADD_TAB } from "../types";

export const addTabAC = (tabs) => async(dispatch) => {
  dispatch({
    type: ADD_TAB,
    payload: 1,
  })
}
