const mongoose = require("mongoose");
const newFeedback = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  feedbacktext:{
    type:String
  },
  rating:{
    type:String
  },
  role: {
    type:String
  },
  date:{
    type: Date,
   default: Date.now
  }
})


const Feedback = mongoose.model("Feedback", newFeedback);

module.exports = Feedback;