import React from 'react';
import { useSelector } from "react-redux";

export const Rrd = () => {
  const rrd = useSelector((state) => state.rrd);

  return (
    <div className='rrdBlock'>
      <p className='rrdText'>Rolling Retention 7 day: {rrd}</p>
    </div>
  );
};

