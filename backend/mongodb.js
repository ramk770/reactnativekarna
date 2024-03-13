const mongodb = require("mongoose");
mongodb.connect(process.env.DB)
.then( ()=> {
    console.log("mongodb is connected "
       
    );
})
.catch( error => {
    console.log(error);
    console.log("mongodb is not connected");
})