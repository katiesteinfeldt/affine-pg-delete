const express = require('express');
let app = express();
const PORT = 5000;
let bodyParser = require('body-parser');
const pg = require('pg');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
















app.listen(PORT, () => {
    console.log('listening on port', PORT)
});