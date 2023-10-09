// controllers/productController.js
const { default: mongoose } = require('mongoose');
const Vehicle = require('../models/VehicleModel');
// Create a new Vehicle
const ObjectId = mongoose.Types.ObjectId;
const createVehicle = async (req, res) => {
  try {
  
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
   
    res.status(201).json({ success: true, message: 'Vehicle đã được tạo thành công.', data: vehicle });
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo Vehicle' });
  }
};

// Get all products
const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json({ success: true, message: 'Danh sách Vehicle.', data: vehicles });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Get a product by ID
const getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle)
     return res.status(404).json({ error: 'Vehicle không tồn tại' });
    return  res.json({ success: true, message: 'Thông tin Vehicle.', data: vehicle });

  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Update a product by ID
const updateVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!vehicle) {
    return  res.status(404).json({ error: 'Vehicle không tồn tại' });
    } 
     return   res.json({ success: true, message: 'Vehicle đã được cập nhật.', data: vehicle });

    
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Delete a product by ID
const deleteVehicleById = async (req, res, next) => {
    try {
      const vehicle = await Vehicle.findByIdAndRemove(req.params.id);
      if (!vehicle) {
        return  res.status(404).json({ error: 'Vehicle không tồn tại' });
        } 
         return   res.json({ success: true, message: 'Vehicle đã được xóa.'});
    
    } catch (error) {
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
    }
  };

module.exports = {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicleById,
  deleteVehicleById,
};