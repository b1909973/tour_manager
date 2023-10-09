// controllers/productController.js
const { default: mongoose } = require('mongoose');
const ScheduleTour = require('../models/ScheduleTourModel');
// Create a new ScheduleTour
const ObjectId = mongoose.Types.ObjectId;
const createScheduleTour = async (req, res) => {
  try {
   
    const scheduleTour = new ScheduleTour(req.body);
    await scheduleTour.save();
   
    res.status(201).json({ success: true, message: 'ScheduleTour đã được tạo thành công.', data: scheduleTour });
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo ScheduleTour' });
  }
};

// Get all products
const getAllScheduleTours = async (req, res) => {
  try {
    const scheduleTours = await ScheduleTour.find().populate('vehicles_id');
    res.json({ success: true, message: 'Danh sách ScheduleTour.', data: scheduleTours });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Get a product by ID
const getScheduleTourById = async (req, res) => {
  try {
    const scheduleTour = await ScheduleTour.findById(req.params.id);
    if (!scheduleTour)
     return res.status(404).json({ error: 'ScheduleTour không tồn tại' });
    return  res.json({ success: true, message: 'Thông tin ScheduleTour.', data: scheduleTour });

  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Update a product by ID
const updateScheduleTourById = async (req, res) => {
  try {
    const scheduleTour = await ScheduleTour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!scheduleTour) {
    return  res.status(404).json({ error: 'ScheduleTour không tồn tại' });
    } 
     return   res.json({ success: true, message: 'ScheduleTour đã được cập nhật.', data: scheduleTour });

    
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Delete a product by ID
const deleteScheduleTourById = async (req, res, next) => {
    try {
      const scheduleTour = await ScheduleTour.findByIdAndRemove(req.params.id);
      if (!scheduleTour) {
        return  res.status(404).json({ error: 'ScheduleTour không tồn tại' });
        } 
         return   res.json({ success: true, message: 'ScheduleTour đã được xóa.'});
    
    } catch (error) {
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
    }
  };

module.exports = {
  createScheduleTour,
  getAllScheduleTours,
  getScheduleTourById,
  updateScheduleTourById,
  deleteScheduleTourById,
};