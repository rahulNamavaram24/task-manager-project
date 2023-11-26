
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const pageNotFound = require('./middleware/not_found')
// middlewares


app.use(express.static('./public'))
app.use(express.json())


// routes
// app.get('/',(req,res)=>{
    //     res.send("task manager app")
    // })
    
    app.use('/api/v1/tasks', tasks)
    
    // app.get('/api/v1/tasks')             => get all the tasks        
    // app.post('/api/v1/tasks')            => create a new task
    // app.get('/api/v1/tasks/:id')         => get single task
    // app.patch('/api/v1/tasks/:id')       => update task
    // app.delete('/api/v1/tasks/:id')      => delete task
    const port = process.env.PORT || 4201
    
    const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => console.log(`Server started at ${port}...`))

    } catch (error) {
        console.log(error);
    }
}

start()
app.use(pageNotFound)