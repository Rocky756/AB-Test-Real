import { TAKE_REG_DATE } from "../types";

export const takeRegDate = (date) => async(dispatch) => {
  dispatch({
    type: TAKE_REG_DATE,
    payload: date,
  })
}
