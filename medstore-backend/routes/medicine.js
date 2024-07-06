const express = require('express');
const router = express.Router();

// GET /api/medicines
router.get('/', (req, res) => {
    res.send('GET all medicines');
});

// POST /api/medicines
router.post('/', (req, res) => {
    // Logic to create a new medicine...
    res.send('Create new medicine');
});

module.exports = router;
