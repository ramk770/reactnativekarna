
const DonarNonVeg = require("../Model/DonarNonveg");

exports.getallnonveg = async (req,res) => {
    try{
        const nonveg = await DonarNonVeg.find();
        res.status(200).json({
            status:"success",
            data:{
                nonveg
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
exports.createnonveg = async (req,res) => {
    try{ 
         console.log("details",req.body);
        const nonveg = await DonarNonVeg.create(req.body);
        res.status(200).json({
            status:"success",
            data:{
                nonveg
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

exports.getOnenonVeg = async (req, res) => {
    try {
        const nonveg = await DonarNonVeg.findById(req.params.id);
        if (!nonveg) {
            return res.status(404).json({
                status: "fail",
                message: "Vegetable not found"
            });
        }
        res.status(200).json({
            status: "success",
            data: {
                nonveg
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

exports.updateonenonVeg = async (req, res) => {
    try {
        const veg = await DonarNonVeg.findByIdAndUpdate(req.params.id);
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
exports.deleteOnenonVeg = async (req, res) => {
    try {
        const veg = await DonarNonVeg.findByIdAndDelete(req.params.id);
      
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