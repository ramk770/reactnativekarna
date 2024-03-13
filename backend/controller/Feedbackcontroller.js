const Feedback = require("../Model/Feedback");


// create feed back



//create the product
exports.createFeedback = async (req,res) => {
    try{ 
        
        const feedback = await Feedback.create(req.body);
        res.status(200).json({
            status:"success",
            data:{
                feedback
            }
        })

    }catch(error){
        res.status(400).json({
            status:"fail",
            message:error
        
        })


    }
}

//get the data 
exports.getallFeedback = async (req,res) => {
    try{
        const feedback = await Feedback.find();
        res.status(200).json({
            status:"success",
            data:{
                feedback
            }
        })

    }catch(error){
        res.status(400).json({
            status:"fail",
            message:"not find the veg data"
            
        })

    }

}

//delete the product
exports.deletefeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findByIdAndDelete(req.params.id);
      
        res.status(200).json({
            status: "success",
            message:"deleted the data",
            data:null
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message
        });
    }
    
    
exports.getOnefeedback = async (req, res) => {
        try {
            const feedback = await Feedback.findById(req.params.id);
            if (!feedback) {
                return res.status(404).json({
                    status: "fail",
                    message: "Vegetable not found"
                });
            }
            res.status(200).json({
                status: "success",
                data: {
                    feedback
                }
            });
        } catch (error) {
            res.status(500).json({
                status: "fail",
                message: error.message
            });
        }
    };
};