import React,  { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { takeRegDate } from '../redux/actionCreators/takeRegDateAC';
import { takeActDate } from '../redux/actionCreators/takeActDateAC';

export const OneTab = ({ userId, index }) => {
  const dispatch = useDispatch();
  const inputRegDate = useSelector((state) => state.inputRegDate);
  const inputActDate = useSelector((state) => state.inputActDate);

  const pushRegDate = (date) => {
    const action = takeRegDate(date);
    dispatch(action);
  }
  const pushActDate = (date) => {
    const action = takeActDate(date);
    dispatch(action);
  }

  return (
    <>
      <tr>
        <th scope="row">{index}</th>
        <td>
          <input  
          value={inputRegDate[index-1]} 
          type="date"
          onChange={(e) => pushRegDate(e.target.value)} 
          />
        </td>
        <td>
          <input 
          value={inputActDate[index-1]} 
          type="date" 
          onChange={(e) => pushActDate(e.target.value)} 
          /> 
        </td>
      </tr>
    </>
  );
};

