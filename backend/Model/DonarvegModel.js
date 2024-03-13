const mongoose = require("mongoose");

const NewDonarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    foodname:{
        type:String,
   },
   member:{
      type:String
   },
    location: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    hotel: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    address: {
        type: String
    }
});

const DonarVeg = mongoose.model('DonarVeg', NewDonarSchema);

module.exports = DonarVeg;
