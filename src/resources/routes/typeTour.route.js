const express = require('express');
const router = express.Router();
const typeTourController = require('../controllers/TypeTourController');

// Create a new product
router.post('/', typeTourController.createTypeTour);

// Get all typetours
router.get('/', typeTourController.getAllTypeTours);

// Get a typetour by ID
router.get('/:id', typeTourController.getTypeTourById);

// Update a typetour by ID
router.put('/:id', typeTourController.updateTypeTourById);

// Delete a typetour by ID
router.delete('/:id', typeTourController.deleteTypeTourById);

module.exports = router;
