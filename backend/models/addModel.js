const mongoose = require('mongoose');
const Schema = require('mongoose');

const dateSchema = mongoose.Schema({
  inputRegDate: {
    type: [Date],
    required: true,
  },
  inputActDate: {
    type: [Date],
    required: true,
  },
},
{
  timestamps: true,
})


const DateModel = mongoose.model('Dates', dateSchema);
module.exports = DateModel;


