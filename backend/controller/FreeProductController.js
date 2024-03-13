const FreeProduct = require("../Model/FreeProduct");


//create the product
exports.createFreeproduct = async (req,res) => {
    try{ 
        
        const free = await FreeProduct.create(req.body);
        res.status(200).json({
            status:"success",
            data:{
                free
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
exports.getallFreeproduct = async (req,res) => {
    try{
        const free = await FreeProduct.find();
        res.status(200).json({
            status:"success",
            data:{
                free
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
        const free = await FreeProduct.findByIdAndDelete(req.params.id);
      
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