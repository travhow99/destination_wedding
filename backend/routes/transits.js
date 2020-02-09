const router = require('express').Router();
let Transit = require('../models/transit.model');

router.route('/').get((req, res) => {
    Transit.find()
        .then((transits) => res.json(transits))
        .catch((err) => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const transit = req.body;

    const newTransit = new Transit(transit);

    console.log(newTransit);

    newTransit.save()
        .then(() => res.json('Transit added!'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
    Transit.findById(req.params.id)
        .then((transit) => res.json(transit))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    Transit.findByIdAndDelete(req.params.id)
        .then(() => res.json('Transit deleted.'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
    Transit.findById(req.params.id)
        .then((transit) => {
            transit.type = req.body.type || transit.type;
            transit.excess_seats = req.body.excess_seats || transit.excess_seats;
            transit.departure_day = req.body.departure_day || transit.departure_day;
            transit.arrival_day = req.body.arrival_day || transit.arrival_day;
            transit.notes = req.body.notes || transit.notes;

            transit.save()
                .then(() => res.json('Transit updated!'))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
});


module.exports = router;