const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appDataSchema = new Schema({
  type: {
    type: String,
    required: [true, 'Title field is required']
  },
  numberOfPoos: {
    type: Number,
    default: 1000
  },
  latlng: {
    type: Array,
    required: [true, 'Title field is required']
  },
  pooIndicator: {
    type: Number,
    default: 10000
  },
  date: {
    type: Date,
    default: Date.now,
  }
}
);

const AppDataModel = mongoose.model('appData', appDataSchema);

module.exports = AppDataModel;