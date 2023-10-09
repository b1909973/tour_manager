// controllers/productController.js
const { default: mongoose } = require('mongoose');
const TypeTour = require('../models/TypeTourModel');
// Create a new TypeTour
const ObjectId = mongoose.Types.ObjectId;
const createTypeTour = async (req, res) => {
  try {
  
    const typeTour = new TypeTour(req.body);
    await typeTour.save();
   
    res.status(201).json({ success: true, message: 'TypeTour đã được tạo thành công.', data: typeTour });
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo TypeTour' });
  }
};

// Get all products
const getAllTypeTours = async (req, res) => {
  try {
    const typeTours = await TypeTour.find();
    res.json({ success: true, message: 'Danh sách TypeTour.', data: typeTours });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Get a product by ID
const getTypeTourById = async (req, res) => {
  try {
    const typeTour = await TypeTour.findById(req.params.id);
    if (!typeTour)
     return res.status(404).json({ error: 'TypeTour không tồn tại' });
    return  res.json({ success: true, message: 'Thông tin TypeTour.', data: typeTour });

  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Update a product by ID
const updateTypeTourById = async (req, res) => {
  try {
    const typeTour = await TypeTour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!typeTour) {
    return  res.status(404).json({ error: 'TypeTour không tồn tại' });
    } 
     return   res.json({ success: true, message: 'TypeTour đã được cập nhật.', data: typeTour });

    
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Delete a product by ID
const deleteTypeTourById = async (req, res, next) => {
    try {
      const typeTour = await TypeTour.findByIdAndRemove(req.params.id);
      if (!typeTour) {
        return  res.status(404).json({ error: 'TypeTour không tồn tại' });
        } 
         return   res.json({ success: true, message: 'TypeTour đã được xóa.'});
    
    } catch (error) {
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
    }
  };

module.exports = {
  createTypeTour,
  getAllTypeTours,
  getTypeTourById,
  updateTypeTourById,
  deleteTypeTourById,
};