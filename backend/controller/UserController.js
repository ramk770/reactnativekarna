
// //update use data using the token 
const {promisify} = require('util');
const jwt = require('jsonwebtoken');
const User = require('../Model/UserModel');
const sendEmail = require('./Email');
const crypto = require('crypto');
const UserToken = id =>{
    return jwt.sign({id},process.env.JWT_SECRETE,{
        expiresIn:process.env.JWT_EXPIRES_IN
    }
    )
}

const createToken = (user, statusCode, res) => {
    const token = UserToken(user._id);
    
    const cookieOption ={
        expires: new  Date(Date.now()+process.env.COOKIE_EXPIRES*24*60*60*1000),
        secure:true,
        httpOnly:true
    }
    res.cookie("jwt", token , cookieOption);
    
    
    res.status(statusCode).json({
        status:"success",
        token,
        data:{
            user
        }
    })
}


//register user data
exports.register = async(req,res,next) =>{
try{
    const user = await User.create(req.body);
    // 
     createToken(user,200,res);
}catch(error){
    res.status(200).json({
        status:'fail',
        message:error

    })
}
         
}
//login the user with token
// Adjust the path accordingly

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
              status:"fail",
              message:"Provide the email and password"
            })
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user || !(await user.correctPassword(password, user.password))) {
            return  res.status(400).json({
              status:"fail",
              message:"Password and email or user is incorrect"
            })
        }
        createToken(user,200,res);
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message || 'Internal Server Error'
        });
    }
};

// producting the dress routing

exports.product = async (req, res, next) => {
    // 1. Getting the token
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return  res.status(400).json({
          status:"fail",
          message:"You are not logged in"
        })
    }
 

    // 2. Verify the token
    try {
        const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRETE);
        console.log(decode);
        
        // Continue with your logic
    
        // For example, you might attach the decoded user information to the request
        req.user = decode;
        next();
    } catch (error) {
        return res.status(400).json({
          status:"fail",
          message:"Invalid token"
        })
    }
};


// role middleware 
exports.restrictTo = (...roles) => {
    return (req, res, next) => {
      // roles ['admin', 'lead-guide']. role='user'
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({
          status:"fail",
          message:"You do not have permission to perform this action"
        })
      }
      next();
    };
  };

// Assuming you have a User model




//get the use data
exports.getUserdata = async (req,res) =>{
    try{
        const user = await User.find();
        res.status(200).json({
            status:"success",
            data:{
                user
    
            }
        })

    }catch(error){
        res.status(400).json({
              status:"fail",
              success: error  
         
        })

    }
   
}

// forgotpassword
exports.forgetPassword = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return  res.status(400).json({
          status:"fail",
          success: "User not found "  
     
    })
    }

    // generate the token
    const resetToken = user.createforgetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // sending the mail
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/forgetPassword/${resetToken}`;
    const message = `Your password reset link: ${resetUrl}`;

    await sendEmail({
        email: user.email,
        subject: 'Your password reset (only available for 10 minutes)',
        message
    });

    res.status(200).json({
        status: 'success',
        message: 'Token sent to email!',
    });
};



exports.resetPassword = async (req, res, next) => {
    // get the token
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    try {
        const user = await User.findOne({ 
            passwordForget: hashedToken,
            passwordExpires: { $gt: new Date() }
        });

        if (!user) {
            return res.status(400).json({
              status:"fail",
              success: "User not found or token expired"  
         
        })
        }

        user.password = req.body.password;
        user.confirmPassword = req.body.confirmPassword;
        user.passwordForget = undefined;
        user.passwordExpires = undefined;

        // Save the user after updating the password
        await user.save();

        createToken(user,200,res);
    }  catch (error) {
        
         
    }
    
};

// update password like current password
exports.updatePassword = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select("+password");
        console.log('req.user:', req.user);
        // if (!user || !(await user.correctPassword(req.body.passwordCurrent, user.password))) {
        //     return res.status(400).json({
        //       status:"fail",
        //       success: "Incorrect password"  
         
        // })
        //}
        user.password = req.body.password;
        user.confirmPassword = req.body.confirmPassword;
        await user.save();

        createToken(user,200,res);
    } catch (error) {
       
        return res.status(500).json({
          status:"fail",
          success: "Error updating password"  
     
    })
    }
};

//update the all the data

exports.updateMe = async (req,res,next) => {
  try{
       // find the error
    if( req.body.password || req.body.confirmPassword){
        return res.status(500).json({
          status:"fail",
          success: "not take the password and confirmPassword"  
     
    })
    }
  // update the document
  const updateUser = await User.findByIdAndUpdate(req.user.id, req.body,{
    new:true,
    runValidators:true
  })
  console.log("hellouser update",updateUser);
  res.status(200).json({
    status: "success",
    data:{
        updateUser
    }
});



  }catch(error){
    console.log("updateme like",error);
    return res.status(500).json({
      status:"fail",
      success: "Error updating user data"  

})

  }  
}

// delete user && 





exports.deleteMe = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.user.id);
        
        if (!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'User not found'
            });
        }
        
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
};


exports.findMe = async(req,res,next) => {
    try{
        const user = await User.findById(req.user.id);
        res.status(200).json({
            status:'success',
            data:{
                user
            }
        })
    }catch(error){
        return console.log(error);
        res.status(400).json({
            status:'error',
            message:error
           })

    }

}