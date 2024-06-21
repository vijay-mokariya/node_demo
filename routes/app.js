const express = require('express');
const router = express();

router.use('/person', require('./person.routes'));
router.use('/demo', require('./demo.routes'));
router.use('/items', require('./item.routes'));

module.exports = router;





