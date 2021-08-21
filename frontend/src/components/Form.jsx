import React, {useState} from 'react';
import { useSelector } from "react-redux";
import { OneTab } from './OneTab';
import { addTabAC } from '../redux/actionCreators/addTabAC';
import { useDispatch } from "react-redux";
import { resetDatesAC } from '../redux/actionCreators/resetDatesAC';
import { resetTabesAC } from '../redux/actionCreators/resetTabsAC';
import { getRRDAC, getDataAC } from '../redux/actionCreators/getRrdAC';
import { Rrd } from './Rrd';
import { VerticalBar } from './VerticalBar';

export const Form = () => {
  const tabs = useSelector((state) => state.tabs); // кол-во строк в таблице, использую, что бы мапить
  const inputRegDate = useSelector((state) => state.inputRegDate); // value инпута колонки с регистрацией
  const inputActDate = useSelector((state) => state.inputActDate); // value инпута колонки с активностью
  const rrd = useSelector((state) => state.rrd); // Rolling Retention 7 day
  const lifeSpan = useSelector((state) => state.lifeSpan); // Rolling Retention 7 day

  const dispatch = useDispatch();

  // Добавляю новую строку в таблицу по нажатию кнопки
  const addRow = () => {
    const action = addTabAC(tabs);
    dispatch(action);
  }

  // Сохраняю даты в базу данных, очищаю value дат и убираю лишние строки таблицы
  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/db/upload', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputRegDate, inputActDate }),
    });
    let action = resetDatesAC();
    dispatch(action);
    action = resetTabesAC();
    dispatch(action);

  };

  // Отправляю запрос на сервер и получаю Rolling Retention 7 day и объект с данными для графика
  const getRrdHandler = async () => {
    let action = getRRDAC();
    dispatch(action);
    action = getDataAC();
    dispatch(action);
  }

  return (
    <div className='tableForm'>
      <form onSubmit={submitHandler}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">UserID</th>
              <th scope="col">Date Registration</th>
              <th scope="col">Date Last Activity</th>
            </tr>
          </thead>
          <tbody>
            {tabs.map((user, index) => (
              <OneTab key={user.index} index={index+1}/>
            ))}
          </tbody>
        </table>
        <section className='formBtns'>
          <button 
          type='button' 
          className='addBtn'
          onClick={addRow}
          >
          <p className='btnText'>Add another user</p>
          </button>
          <button 
          type='submit' 
          className='addBtn'
          onClick={((e) => submitHandler(e))}
          ><p className='btnText'>Save</p>
          </button>
          <button 
          type='button' 
          className='addBtn'
          onClick={getRrdHandler}
          >
          <p className='btnText'>Calculate</p>
          </button>
        </section>
      </form>
      {rrd ? 
      <>
      <Rrd /> 
      <VerticalBar />
      </>
      : null}

    </div>
  );
};

