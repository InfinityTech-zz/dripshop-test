const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
const jsonData = require('./db.json');
const bodyParser = require('body-parser');
const fs = require('fs');


var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// console.log('db', json);
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.get('/', (req, res) => { 
    console.log('test', jsonData);
    res.json(jsonData);
});

app.post('/create', jsonParser,  (req, res) => { 
    // console.log('test', jsonData);
    console.log('req.body.title', req.body);
    jsonData.push(req.body);
    fs.writeFileSync('./db.json', JSON.stringify(jsonData))
    res.json({message: 'success'});
});

app.listen(port, () => {
    console.log('Server started at:' + port);
})