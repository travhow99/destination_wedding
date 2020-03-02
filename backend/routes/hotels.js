const router = require('express').Router();
let Hotel = require('../models/hotel.model');

router.route('/').get((req, res) => {
    Hotel.find()
        .then((hotels) => res.json(hotels))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const hotel = req.body;

    const newHotel = new Hotel(hotel);

    console.log(newHotel);
    
    newHotel.save()
        .then(() => res.json('Hotel added!'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
})

router.route('/:id').get((req, res) => {
    Hotel.findById(req.params.id)
        .then((hotel) => res.json(hotel))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    Hotel.findByIdAndDelete(req.params.id)
        .then(() => res.json('Hotel deleted.'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
    Hotel.findById(req.params.id)
        .then((hotel) => {
            hotel.name = req.body.name || hotel.name;
            hotel.location = req.body.location || hotel.location;
            hotel.image = req.body.image || hotel.image;
            hotel.price_range = req.body.price_range || hotel.price_range;
            hotel.distance = req.body.distance || hotel.distance;
            hotel.notes = req.body.notes || hotel.notes;

            hotel.save()
                .then(() => res.json('Hotel updated!'))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;