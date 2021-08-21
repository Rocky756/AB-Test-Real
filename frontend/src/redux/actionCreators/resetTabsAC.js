import { RESET_TABS } from "../types";

export const resetTabesAC = () => async(dispatch) => {
  dispatch({
    type: RESET_TABS,
    payload: [1],
  })
}
