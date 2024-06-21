const express = require('express');
let app = express.Router();

app.post('/', require('../controller/items/create'));
app.get('/', require('../controller/items/display'));

module.exports = app;