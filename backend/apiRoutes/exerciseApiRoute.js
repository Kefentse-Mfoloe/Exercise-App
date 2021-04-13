const router = require('express').Router();
const { json } = require('express');
const Exercise = require('../models/Exercises');

router.route('/').get((req, res) => {
    Exercise.find()
            .then(exercise => res.json(exercise))
            .catch(err => res.json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const userName = req.body.userName;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({userName, description, duration, date});
    
    newExercise.save()
            .then(() => res.json('Exercise added!'))
            .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
            .then(exercise => res.json(exercise))
            .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
            .then(() => res.json('Exercise deleted!'))
            .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
            .then(exercise => {
                exercise.userName = req.body.userName;
                exercise.description = req.body.description;
                exercise.duration = Number(req.body.duration);
                exercise.date = Date.parse(req.body.date);

                exercise.save()
                        .then(() => res.json('Exercise updated!'))
                        .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;