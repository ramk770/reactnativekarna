const express = require('express');
const UserController = require('../controller/UserController');

const router = express.Router();

router.route('/register').post(UserController.register);
router.route('/login').post(UserController.login);
router.route('/user').get(UserController.getUserdata);
router.route('/forgetpassword').post(UserController.forgetPassword);
router.route('/resetpassword/:token').put(UserController.resetPassword);
//update user password

router.route('/userdata').get(UserController.product , UserController.findMe);
router.route('/updatepassword').put(UserController.product , UserController.updatePassword);
router.route('/updateMe').patch(UserController.product , UserController.updateMe);
router.route('/DeleteMe').delete(UserController.product , UserController.deleteMe);
module.exports=router;