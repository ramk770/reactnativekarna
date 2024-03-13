const Sell = require("../Model/SellproductModel");

//create the product
exports.createSellproduct = async (req,res) => {
    try{ 
        
        const sell = await Sell.create(req.body);
        res.status(200).json({
            status:"success",
            data:{
                sell
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
exports.getallsellproduct = async (req,res) => {
    try{
        const sell = await Sell.find();
        res.status(200).json({
            status:"success",
            data:{
                sell
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
exports.deleteproduct = async (req, res) => {
    try {
        const sell = await Sell.findByIdAndDelete(req.params.id);
      
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