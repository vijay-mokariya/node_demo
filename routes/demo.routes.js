const express = require('express');
let app = express.Router();

app.post('/', require('../controller/demo/create'));
app.get('/', require('../controller/demo/display'));

module.exports = app;