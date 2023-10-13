const pool = require('../db')

const getAllTasks = async (req, res, next) => {
    try{
        const allTasks = await pool.query('SELECT * FROM task ORDER BY id DESC')

        res.json(allTasks.rows)
    }catch(err){
        next(err)
    }
}

const getSingleTask = async (req, res, next) => {
    try {
        const {task_id} = req.params

        const result = await pool.query('SELECT * FROM task WHERE id = $1', [task_id])

        if (result.rows.length === 0) return res.status(404).json({
            message: 'Task not found'
        }) 
        res.json(result.rows[0])
    }catch(err){
        next(err)
    }
}

const createTask = async (req, res, next) => {
    try {
        const {title, description} = req.body
            // RETURNING *: 'Give me the task that is being created and print it out inside the rows object'
        const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *', [title, description])
        res.json(result.rows[0])
    }catch(err){
        next(err)
    }
}

const deleteTask = async (req, res, next) => {
    try{
        const {task_id} = req.params

        // RETURNING *: 'Give me the task that is being deleted and print it out inside the rows object'
        const result = await pool.query('DELETE FROM task WHERE id = $1 RETURNING *', [task_id])
        
        if (result.rowCount === 0) return res.status(404).json({
            message: 'Task not found'
        })

        return res.sendStatus(204)
    }catch(err){
        next(err)
    }
}

const updateTask = async (req, res, next) => {
    try {
        const {task_id} = req.params
        const {title, description} = req.body
        const result = await pool.query('UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, task_id])

        if (result.rows.length === 0) return res.status(404).json({
            message: 'Task not found'
        })

        return res.json(result.rows[0])
    }catch(err){
        next(err)
    }

}

module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    deleteTask,
    updateTask
}