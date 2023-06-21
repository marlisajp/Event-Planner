const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
