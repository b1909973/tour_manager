const express = require('express');
const router = express.Router();
const tourController = require('../controllers/TourController');

// Create a new product
router.post('/', tourController.createTour);

// Get all tours
router.get('/', tourController.getAllTours);

// Get a tour by ID
router.get('/:id', tourController.getTourById);

// Update a tour by ID
router.put('/:id', tourController.updateTourById);

// Delete a tour by ID
router.delete('/:id', tourController.deleteTourById);

module.exports = router;
