const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  username: {type:String,
    required: true,
    immutable: true, 
  unique:true
  },
  password:{
   type: String,
   minlength: 8,
   maxlength: 255 ,
   required:true
  }
    ,
  avatar:{
    type:String
  },
  name:{
    type:String
  },
  gender:{
   type: String,
   required:true,
   default:'Nam'
  },
  phone: {
    // required:true,
    type: String,
    validate: {
      validator: function(value) {
        // Kiểm tra định dạng số điện thoại bằng Regular Expression
        const phoneRegex = /^\d{10}$/; // Ví dụ cho SĐT 10 số
        return phoneRegex.test(value);
      },
      message: 'Định dạng số điện thoại không hợp lệ'
    }
  },
  email: {
    type: String,
    required: true,
 
    validate: {
      validator: function(value) {
        // Kiểm tra định dạng email bằng Regular Expression
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(value);
      },
      message: 'Định dạng email không hợp lệ'
    }
  },

  address:{
    type:String
  }
},{
  versionKey: false 
});

module.exports = mongoose.model('Customers', customerSchema);