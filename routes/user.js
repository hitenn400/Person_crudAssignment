const express = require('express');
const router = express.Router();
const{getAllUser,createUser,getIdUser,updateUser,deleteUser} = require('../controllers/userController');
router.route('/people').get(getAllUser).post(createUser);
router.route('/people/:id').get(getIdUser).put(updateUser).delete(deleteUser);
module.exports=router;
