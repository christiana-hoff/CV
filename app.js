const express = require('express');
const app = express();
const port = 3000

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => res.sendFile('public/index.html' , { root : __dirname}));
app.get('/research', (req, res) => res.sendFile('public/research.html' , { root : __dirname}));
app.get('/field', (req, res) => res.sendFile('public/field.html' , { root : __dirname}));
app.get('/cv', (req, res) => res.sendFile('public/cv.html' , { root : __dirname}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
