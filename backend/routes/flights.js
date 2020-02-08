const router = require('express').Router();
let Flight = require('../models/flight.model');

router.route('/').get((req, res) => {
    Flight.find()
        .then((flights) => res.json(flights))
        .catch((err) => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const flight = req.body;

    const newFlight = new Flight(flight);

    console.log(newFlight);

    newFlight.save()
        .then(() => res.json('Flight added!'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;