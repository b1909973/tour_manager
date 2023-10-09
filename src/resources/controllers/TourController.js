// controllers/productController.js
const { default: mongoose } = require('mongoose');
const Tour = require('../models/TourModel');
// Create a new Tour
const ObjectId = mongoose.Types.ObjectId;
const createTour = async (req, res) => {
  try {
    const t =req.body
    t.type_tour_id= new ObjectId(t.type_tour_id)
    const tour = new Tour(t);
    await tour.save();
   
    res.status(201).json({ success: true, message: 'Tour đã được tạo thành công.', data: tour });
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo tour' });
  }
};

// Get all products
const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find({}).populate('type_tour_id');
    res.json({ success: true, message: 'Danh sách tour.', data: tours });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Get a product by ID
const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour)
     return res.status(404).json({ error: 'Tour không tồn tại' });
    return  res.json({ success: true, message: 'Thông tin tour.', data: tour });

  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Update a product by ID
const updateTourById = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tour) {
    return  res.status(404).json({ error: 'Tour không tồn tại' });
    } 
     return   res.json({ success: true, message: 'Tour đã được cập nhật.', data: tour });

    
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Delete a product by ID
const deleteTourById = async (req, res, next) => {
    try {
      const tour = await Tour.findByIdAndRemove(req.params.id);
      if (!tour) {
        return  res.status(404).json({ error: 'Tour không tồn tại' });
        } 
         return   res.json({ success: true, message: 'Tour đã được xóa.'});
    
    } catch (error) {
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
    }
  };

module.exports = {
  createTour,
  getAllTours,
  getTourById,
  updateTourById,
  deleteTourById,
};