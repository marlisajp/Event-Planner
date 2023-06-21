const mongoose = require('mongoose');
const Event = require('./server/models/Event');

const dbURI =
  'mongodb+srv://admin:admin123@eventplanner.pieklhv.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const events = [
  {
    title: 'Event 1',
    details: 'Details for Event 1',
    date: new Date(),
  },
  {
    title: 'Event 2',
    details: 'Details for Event 2',
    date: new Date(),
  },
  {
    title: 'Event 3',
    details: 'Details for Event 3',
    date: new Date(),
  },
  {
    title: 'Event 4',
    details: 'Details for Event 4',
    date: new Date(),
  },
];

Event.create(events)
  .then(() => {
    console.log('Dummy data has been inserted.');
    mongoose.disconnect();
  })
  .catch((err) => console.log(err));
