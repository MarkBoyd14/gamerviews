const router = require('express').Router();

require('./routes/users')(router);
require('./routes/sessions')(router);

// Step 1: Add your resource routes to the router composer
require('./routes/reviews')(router);

module.exports = router;
