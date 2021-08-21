import { ADD_TAB, TAKE_REG_DATE, TAKE_ACT_DATE, RESET_DATES, RESET_TABS, GET_RRD, DATA } from "../types";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TAB:
      return {
        ...state,
        tabs: [...state.tabs, action.payload],
      };
    case TAKE_REG_DATE:
      return {
        ...state,
        inputRegDate: [...state.inputRegDate, action.payload],
      }
    case TAKE_ACT_DATE:
    return {
      ...state,
      inputActDate: [...state.inputActDate, action.payload],
    }
    case RESET_DATES:
      return {
        ...state,
        inputRegDate: action.payload,
        inputActDate: action.payload,
      }
    case RESET_TABS:
      return {
        ...state,
        tabs: action.payload,
      }
    case GET_RRD:
      return {
        ...state,
        rrd: action.payload,
      }
    case DATA:
    return {
      ...state,
      lifeSpan: action.payload,
    }
    default:
      return state;
  }
};
