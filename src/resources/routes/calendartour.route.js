const express = require('express');
const router = express.Router();
const CalendarTourController = require('../controllers/CalendarTourController');

// Create a new product
router.post('/', CalendarTourController.createCalendarTour);

// Get all tours
router.get('/', CalendarTourController.getAllCalendarTour);

// Get a tour by ID
router.get('/:id', CalendarTourController.getCalendarTourById);

// Update a tour by ID
router.put('/:id', CalendarTourController.updateCalendarTourById);

// Delete a tour by ID
router.delete('/:id', CalendarTourController.deleteCalendarTourById);

module.exports = router;
