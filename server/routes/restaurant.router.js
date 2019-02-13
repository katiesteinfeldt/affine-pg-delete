
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    pool.query('SELECT * FROM "restaurants";')
        .then((results) => {
            console.log(results.rows);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error with SQL select for restaurants', error);
            res.sendStatus(500);
        });
})

router.post('/', (req, res) => {
    console.log('/restaurants POST route was hit');
    pool.query(`INSERT INTO "restaurants" ("restaurant_name", "restaurant_type")
    VALUES ($1, $2);`, [req.body.restaurantName, req.body.restaurantType])
        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error with restaurants insert', error);
            res.sendStatus(500);
        });
});

module.exports = router;