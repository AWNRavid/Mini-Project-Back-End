require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
const fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

const merchant = require('./routes/merchant')

app.use('/merch', merchant);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
