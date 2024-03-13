
const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require('bcryptjs');
const crypto =require('crypto');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role:{
        type:String,
        default:'user'
    },
    image:{
       type:String
    },
    email: {
        type: String,
        required: [true, "Provide the email"],
        validate: [validator.isEmail, "Please enter a correct email"]
    },
    password: {
        type: String,
        required: [true, "Provide the password"],
        select: false
    },
    phoneNumber:{
        type:String
    },
    confirmPassword: {
        type: String,
        required: true,
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: "Passwords do not match"
        }
    },

    passwordForget:String,
    passwordExpires:Date,
    passwordChangeAt:Date,
    active:{
        type:Boolean,
        default:true,
        select: false
    }
});

// Password encrypting middleware
userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next();
});

// Password comparing instance method
userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};
userSchema.pre('save', function(next) {
    console.log("Inside pre-save middleware");
    
    if (!this.isModified("password") || this.isNew) {
        console.log("No password modification or new user");
        return next();
    }

    this.passwordChangeAt = Date.now() - 1000;
    console.log("Password changed at:", this.passwordChangeAt);

    next();
});

// resettoken generating 
userSchema.methods.createforgetPasswordToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.passwordForget = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.passwordExpires = Date.now() + 10 * 60 * 1000;
    console.log({ resetToken }, this.passwordForget, this.passwordExpires);
    return resetToken;
};
//only find the active user (active finding middleWare)
userSchema.pre(/^find/ , function(next){
    this.find({active : { $ne : false}});
    next();

})
const User = mongoose.model("User", userSchema);

module.exports = User;





