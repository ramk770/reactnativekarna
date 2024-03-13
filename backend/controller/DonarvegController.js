const DonarVeg =require("../Model/DonarvegModel");

//get the data
exports.getallveg = async (req,res) => {
    try{
        const veg = await DonarVeg.find();
        res.status(200).json({
            status:"success",
            data:{
                veg
            }
        })

    }catch(error){
        res.status(400).json({
            status:"fail",
            message:"not find the veg data"
            
        })

    }

}

//create data
exports.createveg = async (req,res) => {
    try{
        const veg = await DonarVeg.create(req.body);
        res.status(200).json({
            status:"success",
            data:{
                veg
            }
        })

    }catch(error){
        res.status(400).json({
            status:"fail",
            message:error
            
        })


    }
}

//getsingle data

exports.getOneVeg = async (req, res) => {
    try {
        const veg = await DonarVeg.findById(req.params.id);
        if (!veg) {
            return res.status(404).json({
                status: "fail",
                message: "Vegetable not found"
            });
        }
        res.status(200).json({
            status: "success",
            data: {
                veg
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message
        });
    }
};

//singledata update

exports.updateoneVeg = async (req, res) => {
    try {
        const veg = await DonarVeg.findByIdAndUpdate(req.params.id);
        if (!veg) {
            return res.status(404).json({
                status: "fail",
                message: "Vegetable not found"
            });
        }
        res.status(200).json({
            status: "success",
            data: {
                veg
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message
        });
    }
};
// delete data
exports.deleteOneVeg = async (req, res) => {
    try {
        const veg = await DonarVeg.findByIdAndDelete(req.params.id);
      
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