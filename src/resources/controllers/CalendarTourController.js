// controllers/productController.js
const { default: mongoose } = require('mongoose');
const CalendarTour  = require('../models/CalendarTourModel');
// Create a new CalendarTour 
const ObjectId = mongoose.Types.ObjectId;
const createCalendarTour  = async (req, res) => {
  try {
   
    const calendarTour  = new CalendarTour(req.body);
    await calendarTour .save();
   
    res.status(201).json({ success: true, message: 'CalendarTour  đã được tạo thành công.', data: calendarTour  });
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo CalendarTour ' });
  }
};

// Get all products
const getAllCalendarTour  = async (req, res) => {
  try {
    const calendarTour  = await CalendarTour.find().populate('vehicles_id').populate('tour_id').populate('tour_guide_id','-password -username -email ');
    res.json({ success: true, message: 'Danh sách CalendarTour .', data: calendarTour});
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Get a product by ID
const getCalendarTourById = async (req, res) => {
  try {
    const calendarTour  = await CalendarTour.findById(req.params.id);
    if (!calendarTour )
     return res.status(404).json({ error: 'CalendarTour  không tồn tại' });
    return  res.json({ success: true, message: 'Thông tin CalendarTour .', data: calendarTour  });

  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Update a product by ID
const updateCalendarTourById = async (req, res) => {
  try {
    const calendarTour  = await CalendarTour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!calendarTour ) {
    return  res.status(404).json({ error: 'CalendarTour  không tồn tại' });
    } 
     return   res.json({ success: true, message: 'CalendarTour  đã được cập nhật.', data: calendarTour  });

    
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Delete a product by ID
const deleteCalendarTourById = async (req, res, next) => {
    try {
      const calendarTour  = await CalendarTour.findByIdAndRemove(req.params.id);
      if (!calendarTour ) {
        return  res.status(404).json({ error: 'CalendarTour  không tồn tại' });
        } 
         return   res.json({ success: true, message: 'CalendarTour  đã được xóa.'});
    
    } catch (error) {
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
    }
  };

module.exports = {
  createCalendarTour ,
  getAllCalendarTour ,
  getCalendarTourById,
  updateCalendarTourById,
  deleteCalendarTourById,
};