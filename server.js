const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
const jsonData = require('./db.json');
const bodyParser = require('body-parser');
const fs = require('fs');


let jsonParser = bodyParser.json();

// console.log('db', json);
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => { 
    console.log('test', jsonData);
    res.json(jsonData);
});

app.post('/create', jsonParser,  (req, res) => { 
    // console.log('test', jsonData);
    console.log('req.body.title', req.body);
    // jsonData
    fs.writeFileSync('./db.json', jsonData)
    res.json(jsonData);
});

app.listen(port, () => {
    console.log('Server started at:' + port);
})