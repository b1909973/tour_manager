// controllers/productController.js
const { default: mongoose } = require('mongoose');
const Customer = require('../models/CustomerModel');
// Create a new Người dùng
const ObjectId = mongoose.Types.ObjectId;
const createCustomer = async (req, res) => {
  try {
  
    const customer = new Customer(req.body);
    await customer.save();
   
    res.status(201).json({ success: true, message: 'Người dùng đã được tạo thành công.', data: customer });
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo Người dùng' });
  }
};

// Get all products
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json({ success: true, message: 'Danh sách Người dùng.', data: customers });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Get a product by ID
const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer)
     return res.status(404).json({ error: 'Người dùng không tồn tại' });
    return  res.json({ success: true, message: 'Thông tin Người dùng.', data: customer });

  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Update a product by ID
const updateCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!customer) {
    return  res.status(404).json({ error: 'Người dùng không tồn tại' });
    } 
     return   res.json({ success: true, message: 'Người dùng đã được cập nhật.', data: customer });

    
  } catch (error) {
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
};

// Delete a product by ID
const deleteCustomerById = async (req, res, next) => {
    try {
      const customer = await Customer.findByIdAndRemove(req.params.id);
      if (!customer) {
        return  res.status(404).json({ error: 'Người dùng không tồn tại' });
        } 
         return   res.json({ success: true, message: 'Người dùng đã được xóa.'});
    
    } catch (error) {
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
    }
  };

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
};