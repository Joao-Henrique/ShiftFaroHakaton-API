const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appDataSchema = new Schema({
  numberOfPoos: {
    type: Number,
    default: 1000
  },
  latlng: {
    type: Array,
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