const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appDataSchema = new Schema({
  type: {
    type: String,
    required: [true, 'Title field is required']
  },
  coord: {
    type: Object,
    required: [true, 'Title field is required']
  },
  date: {
    type: Date,
    default: Date.now,
  }
}
);

const AppDataModel = mongoose.model('appData', appDataSchema);

module.exports = AppDataModel;