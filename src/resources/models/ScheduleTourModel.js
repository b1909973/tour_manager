const mongoose = require('mongoose');

const ScheduleTourSchema = new mongoose.Schema({
  day:{
    type:Number ,
    required:true
  },
  name:{
    type:String,
    required:true

  },
  content:{
    type:String,
    required:String

  },
  tour_id:{
    ref:'Tours',

    type:mongoose.Schema.Types.ObjectId,
    immutable: true, 
    required:true
  },
  vehicles_id:[{
    ref:"Vehicle",
    // required:true,
    type:mongoose.Schema.Types.ObjectId
  },
  // validate: {
  //   validator: function (value) {
  //     // Kiểm tra nếu tour_guide_id không rỗng
  //     return value.length > 0;
  //   },
  //   message: 'tour_guide_id không được rỗng',
  // },
   
  ]
},{
  versionKey: false 
});

module.exports = mongoose.model('schedule_tour', ScheduleTourSchema );