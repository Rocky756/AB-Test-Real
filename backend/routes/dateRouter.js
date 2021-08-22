const router = require('express').Router();
const { find } = require('../models/addModel');
const DateModel = require('../models/addModel');

router.post('/upload', async(req, res) => {
  const { inputRegDate, inputActDate } = req.body;
  const dbDate = await DateModel.find().lean();
  // Если  базе ничего нет, то создаем модель и загружаем данные в базу.
  if (dbDate.length === 0) {
    const addDates = await new DateModel({ inputRegDate, inputActDate });
    await addDates.save();
  // Если в базе уже есть записи, то делаем update.
  } else if (dbDate.length > 0) {
    for (let i = 0; i < inputRegDate.length; i++) {
      dbDate[0].inputRegDate.push(inputRegDate[i]);
      dbDate[0].inputActDate.push(inputActDate[i]);
    }
    await DateModel.updateOne({ inputRegDate: dbDate[0].inputRegDate, inputActDate: dbDate[0].inputActDate })
  }
  res.sendStatus(200);
})

router.get('/getrrd', async(req, res) => {
  const dbDate = await DateModel.find().lean();
  const lifeSpan = {};
  const returnUsers = [];
  const download7dUsers = [];
  // Вычисляем юзеров, которые проявляли активность на 7 день и позже.
  for (let i=0; i < dbDate[0].inputActDate.length; i++) {
    let user = (dbDate[0].inputActDate[i] - dbDate[0].inputRegDate[i]) / 86400000;
    let strUser = String(user); // приобразую к строке, что бы записать ключом объекта
    console.log(strUser);
    // если ключ у объекта есть, то создаем новый ключ со значением 1
    // иначе увеличиваем значение подходящего ключа на 1 (добавляем юзера в ключ)
    if (strUser in lifeSpan ) {
      lifeSpan[strUser] += 1;
    } else {
      lifeSpan[strUser] = 1;
    }
    
    if (user >= 7) {
      returnUsers.push(user);
    }
  }
  console.log(lifeSpan);
  const currentTime = new Date();
    // Вычисляем юзеров, которые установили не позже  7 дней.
  for (let i=0; i < dbDate[0].inputRegDate.length; i++) {
  let user = (currentTime - dbDate[0].inputRegDate[i]) / 86400000;
  if (user <= 7) {
    download7dUsers.push(user);
  }
  }
  // Вычисляем по формуле
  const rrd = +(returnUsers.length / download7dUsers.length).toFixed(1);
  console.log(returnUsers.length);
  console.log(download7dUsers.length);
  console.log(rrd); 
  res.json({ rrd, lifeSpan })
})

module.exports = router;
