import { TAKE_ACT_DATE } from "../types";

export const takeActDate = (date) => async(dispatch) => {
  dispatch({
    type: TAKE_ACT_DATE,
    payload: date,
  })
}
