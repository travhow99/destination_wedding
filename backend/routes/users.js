const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const user = req.body;

    const pastUser = User.findOne({email: req.body.email}, function(err, docs) {
        // console.log(err, docs);
    })

    // console.log(pastUser.exec());
    pastUser.exec(function (err, pUser) {
        if (err) return handleError(err);

        console.log(pUser);
        if (pUser) {
            console.log('shit!');

            const data = {
                status: 'error',
                message: 'This user already exists!',
            }
            res.json(data);
        } else {
            console.log('no user found');

            const newUser = new User(user);

            newUser.save()
                .then(() => res.json('User added!'))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        }
      })      
});

module.exports = router;