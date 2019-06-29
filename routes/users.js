/**
 * @author mutwol
 */

 const _dirs = require('../util/controller.helper');
const usercontroller = require(_dirs.paths + '/users.controller');
const express = require('express');
const router = express.Router();
const isAuth=require('../middlewares/auth.middleware');
const userLoggedIn=require('../middlewares/user.middleware');
const userRole = require('../middlewares/role.middleware');

/**
 * Get All Users
 */
 router.get('/',isAuth, userLoggedIn, usercontroller.index);

/**
 * Create User
 */
router.post('/', usercontroller.store);

/**
 * Get One User
 */
router.get('/:id', usercontroller.show);

/**
 * Update User 
 */
router.patch('/:id', usercontroller.update);

/**
 * Destroy User
 * .. DO NOT DELETE DATA !! 😧 
 */

router.delete('/:id', usercontroller.destroy);

/**
 * Verify user account
 */

router.post('/verify/:token', usercontroller.verify);



module.exports = router;
