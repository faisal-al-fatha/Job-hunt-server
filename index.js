const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const data = require('./data/data.json');

app.get('/', (req, res) =>{
    res.send('JOB Hub Server Running')
})

app.get('/job-data', (req, res) => {
    res.send(data)
})

app.listen(port, ()=> {
    console.log('Job Hunt server running on port', port);
})