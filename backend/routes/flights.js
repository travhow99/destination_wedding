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

router.route('/:id').get((req, res) => {
    Flight.findById(req.params.id)
        .then((flight) => res.json(flight))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    Flight.findByIdAndDelete(req.params.id)
        .then(() => res.json('Flight deleted.'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
    Flight.findById(req.params.id)
        .then((flight) => {
            flight.flight_number = req.body.flight_number || flight.flight_number;
            flight.airline = req.body.airline || flight.airline;
            flight.departure_city = req.body.departure_city || flight.departure_city;
            flight.arrival_city = req.body.arrival_city || flight.arrival_city;

            flight.save()
                .then(() => res.json('Flight updated!'))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
});


module.exports = router;