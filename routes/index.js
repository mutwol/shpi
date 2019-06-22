const express = require('express');
var userRoutes = require('./users');
const router = express.Router();

/**
 * user routes
 */
router.use('/users', userRoutes);

module.exports = router;
