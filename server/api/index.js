const router = require('express').Router();

router.use('/events', require('./events'));

router.use(function (req, res, next) {
  const err = new Error('Cannot find API route!');
  err.status = 404;
  next(err);
});

module.exports = router;
