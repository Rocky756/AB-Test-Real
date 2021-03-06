import { GET_RRD, DATA } from "../types";

export const getRRDFetch = async () => {
  const response = await fetch("/db/getrrd", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};



export const getRRDAC = () => async (dispatch) => {
  const { rrd} = await getRRDFetch();
    dispatch(
      {
      type: GET_RRD,
      payload: rrd,
      });
};

export const getDataAC = () => async (dispatch) => {
  const { lifeSpan } = await getRRDFetch();
    dispatch({
        type: DATA,
        payload: lifeSpan,
      });
};
