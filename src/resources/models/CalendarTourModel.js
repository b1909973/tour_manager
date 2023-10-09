const mongoose = require('mongoose');

const CalendarTourSchema = new mongoose.Schema({
  start_date:{
    type:mongoose.Schema.Types.Date,
    required:true
  },
  end_date:{
    type:mongoose.Schema.Types.Date,
    required:true
  },

  place:{
    type:String,
    required:true
  },
  tour_id:{
    ref:'Tours',

    type:mongoose.Schema.Types.ObjectId,
    required:true,
    immutable: true, 
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
   
  ],
  tour_guide_id:[{
    ref:"tour_guides",
    // required:true,
    type:mongoose.Schema.Types.ObjectId
  //   type:Array,
  //   required:true,
  //   validate: {
  //     validator: function (value) {
  //       // Kiểm tra nếu tour_guide_id không rỗng
  //       return value.length > 0;
  //     },
  //     message: 'tour_guide_id không được rỗng',
  //   },
  // },
}]


},{
  versionKey: false 
});

module.exports = mongoose.model('canlendar_tours',  CalendarTourSchema );