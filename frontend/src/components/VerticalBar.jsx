import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from "react-redux";

export const VerticalBar = () => {
  const lifeSpan = useSelector((state) => state.lifeSpan); // Rolling Retention 7 day
  let arrUsers; // Сделаем массив кол-ва юзеров для графика
  let arrLabels; // Массив с вариантами дней последней активности
  let newArrLabels; // Добавил в arrLabels подпись days
  if (lifeSpan != null) {
    arrUsers = Object.values(lifeSpan);
    arrLabels = Object.keys(lifeSpan);
    newArrLabels = arrLabels.map((el) => el + ' days');
  }
  const data = {
    labels: newArrLabels,
    datasets: [
      {
        label: 'LTV',
        data: arrUsers,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  

  return (
    <div className='vBar'>
    <Bar data={data} options={options} />
  </div>
  );
};

