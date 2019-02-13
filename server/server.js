const express = require('express');
let app = express();
const PORT = 5000;
let bodyParser = require('body-parser');
const restaurantRouter = require('./routes/restaurant.router');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/restaurants', restaurantRouter);


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});


