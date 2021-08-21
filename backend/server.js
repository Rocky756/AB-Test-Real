const dotenv = require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const connect = require('./db/connect');
const dateRouter = require('./routes/dateRouter');
const cors = require("cors");



const app = express();

connect.connect();

app.use(cors());

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());

app.use('/', dateRouter);

app.use((req, res, next) => {
  const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
  next(error);
});
// Отлавливаем HTTP-запрос с ошибкой и отправляем на него ответ.
app.use(function (err, req, res, next) {
  // Получаем текущий ражим работы приложения.
  const appMode = req.app.get('env');
  // Создаём объект, в котором будет храниться ошибка.
  let error;

  // Если мы находимся в режиме разработки, то отправим в ответе настоящую ошибку. В противно случае отправим пустой объект.
  if (appMode === 'development') {
    error = err;
  } else {
    error = {};
  }

  // Записываем информацию об ошибке и сам объект ошибки в специальные переменные, доступные на сервере глобально, но только в рамках одного HTTP-запроса.
  res.locals.message = err.message;
  res.locals.error = error;

  // Задаём в будущем ответе статус ошибки. Берём его из объекта ошибки, если он там есть. В противно случае записываем универсальный стату ошибки на сервере - 500.
  res.status(err.status || 500);
  // Формируем HTML-текст из шаблона "error.hbs" и отправляем его на клиент в качестве ответа.
  res.render('error');
});

app.listen(process.env.PORT, () => {
  console.log(`server started PORT: ${process.env.PORT}`);
})
