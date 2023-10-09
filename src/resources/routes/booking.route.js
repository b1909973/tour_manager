const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/BookingController');

// Create a new product
router.post('/', bookingController.createBooking);

// Get all bookings
router.get('/', bookingController.getAllBookings);

// Get a booking by ID
router.get('/:id', bookingController.getBookingById);

// Update a booking by ID
router.put('/:id', bookingController.updateBookingById);

// Delete a booking by ID
router.delete('/:id', bookingController.deleteBookingById);

module.exports = router;
