const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
 const Customers = require('../models/CustomerModel');
const TourGuide  = require('../models/TourGuideModel');
// Route đăng nhập
const login = async (req, res)  => {
  const { username, password } = req.body;
 
  try {

    const cus = await Customers.findOne({ username });
    const gui  = await TourGuide.findOne({username})

    if (!cus) {
      if(!gui){
        return res.status(401).json({ message: 'Authentication failed' });
      }else{
        const isMatch = (password==gui.password);
        if (!isMatch) {
        return res.status(401).json({ message: 'Authentication failed' });
         
        }else{
          const token = jwt.sign({ id:gui._id }, 'KEY', {
            expiresIn: '1d',
          });
          const data  ={name:gui.name,avatar:gui.avatar,email:gui.email,address:gui.address,phone:gui.phone,gender:gui.gender,cccd:gui.cccd,birtday:gui.birtday} 
          return res.status(200).json({success:true, message:'thanh cong',role:'tour_guide',token,data})

        }
      }
    }else{
      const isMatch = (password==cus.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Authentication failed' });
       
      }else{
        const token = jwt.sign({ id:cus.id }, 'KEY', {
          expiresIn: '1d',
        });
        const data  ={name:cus.name,avatar:cus.avatar,email:cus.email,address:cus.address,phone:cus.phone,gender:cus.gender} 
        return res.status(200).json({success:true, message:'thanh cong',role:'customer',token,data})

      }



    }
    



    
 
  } catch (error) {
    console.error('Lỗi trong quá trình đăng nhập:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const register = async (req, res) => {
  try {
    await body('username').isLength({ min: 8 }).withMessage('Username phải có ít nhất 5 ký tự').run(req);
    await body('password').isLength({ min: 8 }).withMessage('Mật khẩu phải có ít nhất 8 ký tự').run(req);
    await body('repassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Mật khẩu và mật khẩu xác nhận không khớp');
      }
      return true;
    }).run(req);
    await body('email').isEmail().withMessage('Email không hợp lệ').run(req);

    const errors = validationResult(req).array(); // Chuyển thành mảng

    const { username } = req.body;
    const existingUser = await Customers.findOne({ username });

    if (existingUser) {
      errors.push({ msg: 'Tên người dùng đã tồn tại' });
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const customer = new Customers(req.body);
    await customer.save();

    res.status(201).json({ success: true, message: 'Người dùng đã được tạo thành công.', data: customer });
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo Người dùng' });
  }
};
module.exports = {
  login,
  register
}