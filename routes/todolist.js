const express= require('express');
const router= express.Router();
const todolistConstroller = require('../controllers/todolist_controller');

router.get('/',todolistConstroller.todolist);
router.post('/submit',todolistConstroller.submit);
router.post('/delete_todo',todolistConstroller.deletetodo);

module.exports=router;