const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({

  name: {
    type:String,
    required:true,

  },
  time:{
    type:Number,
    required:true
  },
  image:{
    type:Array,
    required:true,
    validate: {
      validator: function (value) {
        // Kiểm tra nếu tour_guide_id không rỗng
        return value.length > 0;
      },
      message: 'tour_guide_id không được rỗng',
    },
  },
  price:{
    type:Number,
    required:true
  },
  status:{
    type:Number,
    required:true,
    default:1
  },
  customer_number:{
    
  type:  Number,
  required:true,
  default:1
  },
  tour_guide_number:{
    
    type:  Number,
    required:true,
    default:1
    },
  type_tour_id: {
    type:mongoose.Schema.Types.ObjectId,
    immutable: true, 
    required:true,
    ref:'Type_Tours',
   
  },
},{
  versionKey: false 
});

module.exports = mongoose.model('Tours', tourSchema);