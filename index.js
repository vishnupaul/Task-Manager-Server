const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// port
const PORT = process.env.PORT || 8000;

// db connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('we are connected');
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.use('/', require('./routes'));

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, (req, res) => {
  console.log(`server is running on port ${PORT}`);
});
