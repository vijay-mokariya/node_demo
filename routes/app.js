const express = require('express');
const router = express();

router.use('/person', require('./person.routes'));

router.use('/', (req, res) => {
    res.send("welcome")
});

module.exports = router;