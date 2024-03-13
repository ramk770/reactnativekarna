const Wasted = require("../Model/Wasteproduct");


//create the product
exports.createWastedproduct = async (req,res) => {
    try{ 
        const wasted = await Wasted.create(req.body);
        res.status(200).json({
            status:"success",
            data:{
                  wasted
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
exports.getallWastedproduct = async (req,res) => {
    try{
        const wasted = await Wasted.find();
        res.status(200).json({
            status:"success",
            data:{
                wasted
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
exports.deleteWasted = async (req, res) => {
    try {
        const wasted = await Wasted.findByIdAndDelete(req.params.id);
      
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
};