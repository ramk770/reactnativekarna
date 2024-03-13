const mongoose = require("mongoose");

const wastedProductModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        default: 0
    }
});

const WastedProduct = mongoose.model("WastedProduct", wastedProductModel);
module.exports = WastedProduct;
