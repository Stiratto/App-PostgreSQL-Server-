const {Router} = require('express');
const {getAllTasks, getSingleTask, createTask, deleteTask, updateTask} = require('../controllers/tasks.controller')

const router = Router()


router.get('/tasks', getAllTasks)

router.get('/tasks/:task_id', getSingleTask)

router.post('/tasks', createTask)

router.delete('/tasks/:task_id', deleteTask)

router.put('/tasks/:task_id', updateTask)

module.exports = router
