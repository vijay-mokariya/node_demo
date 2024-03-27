const express = require('express');
let app = express.Router();
const passport = require('../auth');

app.use(passport.initialize());
const authuser = passport.authenticate('local', { session: false });


app.get('/', authuser, require('../controller/person/display'));
app.get('/:id', authuser, require('../controller/person/disperson'));
app.post('/', require('../controller/person/create'));
app.put('/:id', authuser, require('../controller/person/update'));
app.delete('/:id', authuser, require('../controller/person/deleteperson'));

module.exports = app; 
