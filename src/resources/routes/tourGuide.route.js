const express = require('express');
const router = express.Router();
const tourGuideController = require('../controllers/TourGuideController');

// Create a new product
router.post('/', tourGuideController.createTourGuide);

// Get all tourGuides
router.get('/', tourGuideController.getAllTourGuides);

// Get a tourGuide by ID
router.get('/:id', tourGuideController.getTourGuideById);

// Update a tourGuide by ID
router.put('/:id', tourGuideController.updateTourGuideById);

// Delete a tourGuide by ID
router.delete('/:id', tourGuideController.deleteTourGuideById);

module.exports = router;
