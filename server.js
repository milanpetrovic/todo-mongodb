const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/create-item', (req, res) => {
    console.log(req.body.task);
    res.send('Thanks for submitting the form');
});

app.listen(3000);