const mongoose = require("mongoose");

const NewDonarNonvegSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    foodname:{
         type:String
    },
    member:{
       type:String
    },
    image: {
        type: String
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

const DonarNonveg = mongoose.model('DonarNonveg', NewDonarNonvegSchema);

module.exports = DonarNonveg;
