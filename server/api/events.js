const router = require('express').Router();
const Event = require('../models/Event');

router.get('/', async (req, res, next) => {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (error) {
    console.error('error getting events');
    next(error);
  }
});

router.post('/add', async (req, res, next) => {
  try {
    const newEvent = req.body;
    console.log('new event', newEvent);
    Event.create(newEvent);
    res.status(200).send(newEvent);
  } catch (error) {
    console.error('error adding events');
    next(error);
  }
});

module.exports = router;
