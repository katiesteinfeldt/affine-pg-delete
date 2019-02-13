const pg = require('pg');

module.exports = pool = pg.Pool({
    database: 'restaurants',
    host: 'localhost',
    port: '5432',
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('Postgresql connected!');
});

pool.on('error', (error) => {
    console.log('Error with postgres pool', error);
});



