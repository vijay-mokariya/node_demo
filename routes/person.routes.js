const express = require('express');
let app = express.Router();
const passport = require('../auth');
const upload = require('../controller/person/uplode');
app.use(passport.initialize());
const authuser = passport.authenticate('local', { session: false });


app.get('/', require('../controller/person/display'));
app.get('/login', require('../controller/person/login'));
app.get('/:id', require('../controller/person/disperson'));
app.post('/signup', upload.single('profile'), require('../controller/person/create'));
app.put('/:id', require('../controller/person/update'));
app.delete('/:id', require('../controller/person/deleteperson'));


//app.post('/upload', upload.single('profile'),require("../controller/person/uplode"));

module.exports = app;
//export default app;






