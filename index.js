const express = require('express');
const app = express();
const cors = require('cors');
const courses = require('./courses.json')
const port = process.env.PORT || 5500;

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Server is running...')
})

app.get('/courses',(req, res)=>{
    res.send(courses);
})

app.get('/courses/:courseId', (req, res)=>{
    const id = parseInt(req.params.courseId)
    const course = courses.find(c => c.id === id) || {}
    res.send(course);
})

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})