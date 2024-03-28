const express = require('express');
let app = express.Router();
const passport = require('../auth');

app.use(passport.initialize());
const authuser = passport.authenticate('local', { session: false });


app.get('/', authuser, require('../controller/person/display'));
app.get('/:id', require('../controller/person/disperson'));
app.post('/', require('../controller/person/create'));
app.put('/:id', require('../controller/person/update'));
app.delete('/:id', require('../controller/person/deleteperson'));

module.exports = app; 
