import { RESET_DATES } from "../types";

export const resetDatesAC = () => async(dispatch) => {
  dispatch({
    type: RESET_DATES,
    payload: [],
  })
}
