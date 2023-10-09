// controllers/productController.js
const { default: mongoose } = require('mongoose');
const Booking = require('../models/BookingModel');
// Create a new Booking
const ObjectId = mongoose.Types.ObjectId;

const createBooking = async (req, res) => {
  try {
  
    const booking = new Booking(req.body);
    await booking.save();
   
    res.status(201).json({ success: true, message: 'Booking đã được tạo thành công.', data: booking });
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo Booking' });
  }
};

// Get all products
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json({ success: true, message: 'Danh sách Booking.', data: bookings });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Get a product by ID
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking)
     return res.status(404).json({ error: 'Booking không tồn tại' });
    return  res.json({ success: true, message: 'Thông tin Booking.', data: booking });

  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Update a product by ID
const updateBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) {
    return  res.status(404).json({ error: 'Booking không tồn tại' });
    } 
     return   res.json({ success: true, message: 'Booking đã được cập nhật.', data: booking });

    
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Delete a product by ID
const deleteBookingById = async (req, res, next) => {
    try {
      const booking = await Booking.findByIdAndRemove(req.params.id);
      if (!booking) {
        return  res.status(404).json({ error: 'Booking không tồn tại' });
        } 
         return   res.json({ success: true, message: 'Booking đã được xóa.'});
    
    } catch (error) {
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
    }
  };

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById,
};