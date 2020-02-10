const router = require('express').Router();
let Accommodation = require('../models/accommodation.model');

router.route('/').get((req, res) => {
    Accommodation.find()
        .then((accommodations) => res.json(accommodations))
        .catch((err) => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const accommodation = req.body;

    const newAccommodation = new Accommodation(accommodation);

    console.log(newAccommodation);

    newAccommodation.save()
        .then(() => res.json('Accommodation added!'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
    Accommodation.findById(req.params.id)
        .then((accommodation) => res.json(accommodation))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    Accommodation.findByIdAndDelete(req.params.id)
        .then(() => res.json('Accommodation deleted.'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
    Accommodation.findById(req.params.id)
        .then((accommodation) => {
            accommodation.type = req.body.type || accommodation.type;
            accommodation.excess_beds = req.body.excess_beds || accommodation.excess_beds;
            accommodation.checkin_day = req.body.checkin_day || accommodation.checkin_day;
            accommodation.checkout_day = req.body.checkout_day || accommodation.checkout_day;
            accommodation.notes = req.body.notes || accommodation.notes;

            accommodation.save()
                .then(() => res.json('Accommodation updated!'))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
});


module.exports = router;