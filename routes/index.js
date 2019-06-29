/**
 * @author mutwol
 */

var userRoutes = require('./users');
var authRoutes = require('./auth');
const express = require('express');

const router = express.Router();

/**
 * auth {{token}}
 */
router.use('/oauth', authRoutes);


/**
 * user routes
 */
router.use('/users', userRoutes);

module.exports = router;
