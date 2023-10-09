const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  } ,

},{
  versionKey: false 
});

module.exports = mongoose.model('Vehicle', VehicleSchema);