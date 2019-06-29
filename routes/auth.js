/**
 * @author mutwol
 */

var _dirs = require('../util/controller.helper');
var authcontroller = require(_dirs.paths + '/auth.controller');
var express = require('express');
var router = express.Router();
/**
 * auth user
 */
router.post('/', authcontroller.login);

module.exports = router;