const express = require('express');
let app = express.Router();

app.get('/', require('../controller/person/display'));
app.get('/:id', require('../controller/person/disperson'));
app.post('/', require('../controller/person/create'));
app.put('/:id', require('../controller/person/update'));
app.delete('/:id', require('../controller/person/deleteperson'));

module.exports = app; 