const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { upload } = require('./uploads');

app.post('/api/file', upload.single('file'), function (req, res) {
  try {
    return res.status(200).json('ok');
  } catch (error) {
    return res.status(400).send('Bad request');
  }
});

// This code is used to save the file address to mongodb
// const img = `${req.protocol}://${req.get('host')}/${files.path}`;

app.listen(port, () => console.log(`running on port : ${port}`));
