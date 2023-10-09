const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/VehicleController');


router.post('/', vehicleController.createVehicle);

// Get all Vehicles
router.get('/', vehicleController.getAllVehicles);

// Get a Vehicle by ID
router.get('/:id', vehicleController.getVehicleById);

// Update a Vehicle by ID
router.put('/:id', vehicleController.updateVehicleById);

// Delete a Vehicle by ID
router.delete('/:id', vehicleController.deleteVehicleById);


module.exports = router;
