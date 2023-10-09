const express = require('express');
const router = express.Router();
const scheduleTourController = require('../controllers/ScheduleTourController');

// Create a new product
router.post('/', scheduleTourController.createScheduleTour);

// Get all tours
router.get('/', scheduleTourController.getAllScheduleTours);

// Get a tour by ID
router.get('/:id', scheduleTourController.getScheduleTourById);

// Update a tour by ID
router.put('/:id', scheduleTourController.updateScheduleTourById);

// Delete a tour by ID
router.delete('/:id', scheduleTourController.deleteScheduleTourById);

module.exports = router;
