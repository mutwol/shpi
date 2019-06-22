var _dirs = require('../util/controller.helper');
var usercontroller = require(_dirs.paths + '/users.controller');
var express = require('express');
var router = express.Router();

/**
 * GET USERS
 */
router.get('/', usercontroller.index);

/**
 * CREATE USER
 */
router.post('/', usercontroller.store);

/**
 * GET USER
 */
router.get('/:id', usercontroller.show);

/**
 * UPDATE USER 
 */
router.patch('/:id', usercontroller.update);

/**
 * DESTROY USER
 * .. DO NOT DELETE DATA !! 😧 
 */

router.delete('/:id', usercontroller.destroy);

module.exports = router;

