const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  booking_date: {
    type:String,
    required:true,
    immutable: true, 
  },
  billing_information:Array,
  price:{
    type:Number,
    required:true
    // immutable: true, 
  },
  status:{
    type:Number,
    required:true,
    default:1
  },
  customer_number:{
    type:Number,
    required:true,
  
  },
  customer_id: {
    type:mongoose.Schema.Types.ObjectId,
    immutable: true, 
    required:true
  },
  tour_id:{
    type:mongoose.Schema.Types.ObjectId,
    immutable: true, 
    required:true
  },
  total:{
    type:Number,
    required:true
  },
  adult:{
    type:Number,
    required:true,
    default:0
  },
  children:{
    type:Number,
    required:true,
    default:0
  },

},{
  versionKey: false 
});

module.exports = mongoose.model('Booking', BookingSchema);