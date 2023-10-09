const mongoose = require('mongoose');

const tourGuideSchema = new mongoose.Schema({
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
    name:{
      type:String
    },
  avatar:{
    type:String
  },
  gender:{
   type: String,
   required:true,
   default:'Nam'
  },
  birtday:{
   type:String,
   required:true
  },
  cccd:{
    type:String,
    required:true
  },
  status:{
    type:Number,
    default:1,
    required:true
  },

  phone: {
    required:true,
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
    type:String,
    required:true
  }
},{
  versionKey: false 
});

module.exports = mongoose.model('tour_guides', tourGuideSchema);