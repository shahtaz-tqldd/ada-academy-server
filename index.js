const express = require('express');
const app = express();
const courses = require('./courses.json')
const port = 5000;

app.get('/', (req, res)=>{
    res.send('Server is running...')
})

app.get('/courses',(req, res)=>{
    res.send(courses);
})

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})