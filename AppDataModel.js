const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appDataSchema = new Schema({
  numberOfPoos: {
    type: Number,
  },
  latlng: {
    type: Array,
  },
  pooIndicator: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  }
}
);

const AppDataModel = mongoose.model('appData', appDataSchema);

module.exports = AppDataModel;