const mongoose = require('mongoose');

const typeTourSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
 desc:{
  
  type:String,
  required:true
 }
},{
  versionKey: false 
});

module.exports = mongoose.model('Type_Tours', typeTourSchema);