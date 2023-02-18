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

app.get('/fresher-job/:id', (req, res) => {
    const id = req.params.id;
    const job = data.fresherJobs.find(j => j.id === id);
    res.send(job)
})

app.get('/senior-job/:id', (req, res) => {
    const id = req.params.id;
    const job = data.SeniorJobs.find(j => j.id === id);
    res.send(job)
})

app.get('/world-topIt/:id', (req, res) => {
    const id = req.params.id;
    const company = data.worldTopItCompanies.find(c => c.id === id);
    res.send(company)
})

app.get('/bd-topIt/:id', (req, res) => {
    const id = req.params.id;
    const company = data.bdTopItCompanies.find(c => c.id === id);
    res.send(company)
})

app.listen(port, ()=> {
    console.log('Job Hunt server running on port', port);
})