const express = require('express');
const router = express();

router.use('/person', require('./person.routes'));

module.exports = router;





