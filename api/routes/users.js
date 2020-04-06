const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /users'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /users'
    });
});

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
    if (id === 'special') {
        res.status(400).json({
            message: 'You passed a special info',
            id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated User'
    });
});

router.delete('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'Delete User'
    });
});

module.exports = router;
