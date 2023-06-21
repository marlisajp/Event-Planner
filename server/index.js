const mongoose = require('mongoose');
const app = require('./app');

const dbURI =
  'mongodb+srv://admin:admin123@eventplanner.pieklhv.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Connected to MongoDB');

    app.listen(3000, () => {
      console.log('Server is listening on port 3000');
    });
  })
  .catch((err) => console.log(err));
