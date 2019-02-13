
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

router.delete('/:id', (req, res) => {//id could be taco or number or anything. colon means anything
    console.log('/restaurants DELETE route was hit');
    console.log('req.params', req.params);
    pool.query(`DELETE FROM "restaurants" WHERE "id"= $1;`, [req.params.id])
        .then(() => {
            res.sendStatus(204);
        }).catch((error) => {
            console.log('error with restaurants delete query', error);
            res.sendStatus(500);
        });
});

module.exports = router;