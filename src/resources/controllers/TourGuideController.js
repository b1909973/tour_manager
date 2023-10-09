// controllers/productController.js
const { default: mongoose } = require('mongoose');
const TourGuide = require('../models/TourGuideModel');
// Create a new tourGuide
const ObjectId = mongoose.Types.ObjectId;
const createTourGuide = async (req, res) => {
  try {
  
    const tourGuide = new TourGuide(req.body);
    await tourGuide.save();
   
    res.status(201).json({ success: true, message: 'tourGuide đã được tạo thành công.', data: tourGuide });
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo tourGuide' });
  }
};

// Get all products
const getAllTourGuides = async (req, res) => {
  try {
    const tourGuides = await TourGuide.find();
    res.json({ success: true, message: 'Danh sách TourGuide.', data: tourGuides });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Get a product by ID
const getTourGuideById = async (req, res) => {
  try {
    const tourGuide = await TourGuide.findById(req.params.id);
    if (!tourGuide)
     return res.status(404).json({ error: 'tourGuide không tồn tại' });
    return  res.json({ success: true, message: 'Thông tin tourGuide.', data: tourGuide });

  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Update a product by ID
const updateTourGuideById = async (req, res) => {
  try {
    const tourGuide = await TourGuide.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tourGuide) {
    return  res.status(404).json({ error: 'tourGuide không tồn tại' });
    } 
     return   res.json({ success: true, message: 'tourGuide đã được cập nhật.', data: tourGuide });

    
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Delete a product by ID
const deleteTourGuideById = async (req, res, next) => {
    try {
      const tourGuide = await TourGuide.findByIdAndRemove(req.params.id);
      if (!tourGuide) {
        return  res.status(404).json({ error: 'tourGuide không tồn tại' });
        } 
         return   res.json({ success: true, message: 'tourGuide đã được xóa.'});
    
    } catch (error) {
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
    }
  };

module.exports = {
  createTourGuide,
  getAllTourGuides,
  getTourGuideById,
  updateTourGuideById,
  deleteTourGuideById,
};