const express = require('express');
var cors = require('cors')
const app = express();
const port = 8080;


app.use(cors())

app.get('/', (req, res) => {
    let name = req.query.name
    res.send(`<h1>Hello Mr. ${name}</h1>`);
  res.send('you sent me get request');
});

app.post('/welcome', (req, res) => {
    let name = req.query.name
    res.send(`<h2>Hello Mr. ${name}</h2> <h3>Wecome to the world of AJAX</h3>`);
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});