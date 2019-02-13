const express = require('express');
let app = express();
const PORT = 5000;
let bodyParser = require('body-parser');
const pg = require('pg');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/restaurants', (req, res) => {
    pool.query('SELECT * FROM "Restaurants";')
        .then((results) => {
            console.log(results.rows);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error with SQL select for restaurants', error);
            res.sendStatus(500);
        });
})













app.listen(PORT, () => {
    console.log('listening on port', PORT)
});