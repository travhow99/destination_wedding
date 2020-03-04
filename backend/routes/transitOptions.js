const router = require('express').Router();
let TransitOption = require('../models/transitOption.model');

router.route('/').get((req, res) => {
    TransitOption.find()
        .then((transitOptions) => res.json(transitOptions))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const transitOption = req.body;

    const newTransitOption = new TransitOption(transitOption);

    console.log(newTransitOption);
    
    newTransitOption.save()
        .then(() => res.json('TransitOption added!'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
})

router.route('/:id').get((req, res) => {
    TransitOption.findById(req.params.id)
        .then((transitOption) => res.json(transitOption))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    TransitOption.findByIdAndDelete(req.params.id)
        .then(() => res.json('TransitOption deleted.'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
    TransitOption.findById(req.params.id)
        .then((transitOption) => {
            transitOption.name = req.body.name || transitOption.name;
            // transitOption.location = req.body.location || transitOption.location;
            // transitOption.image = req.body.image || transitOption.image;
            // transitOption.price_range = req.body.price_range || transitOption.price_range;
            // transitOption.distance = req.body.distance || transitOption.distance;
            // transitOption.notes = req.body.notes || transitOption.notes;

            transitOption.save()
                .then(() => res.json('TransitOption updated!'))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;