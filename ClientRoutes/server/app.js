const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const port = process.env.port || 4000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use('/doggos', proxy('http://localhost:4001'));
app.use('/fruit', proxy('http://localhost:3001'));

app.get('/', (req, res) => {
    res.send('Welcome to the backend');
});

app.listen(port, () => console.log('Example app listening on port ' + port));