require("dotenv").config();
const express = require("express");
const cors = require("cors");
const UserRouter = require("./Router/userRouter");
const bodypaser = require("body-parser");
const mongodb = require("./mongodb");
const VegRouter = require("./Router/VegRouter");
const nonVegRouter = require("./Router/NonVegRouter");
const Sellproduct = require("./Router/SellProductRuter");
const Freeproduct = require("./Router/FreeRouter");
const WastedRouter = require("./Router/WastedRouter");
const FeedbackRouter = require("./Router/Feedback");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodypaser.urlencoded());



app.use("/api/v1/", UserRouter);
//veg router
app.use("/api/v1/", VegRouter);
//nonveg router
app.use("/api/v1/", nonVegRouter);
//sellproduct
app.use("/api/v1/", Sellproduct);
//free product
app.use("/api/v1/", Freeproduct);
//wasted product
app.use("/api/v1/", WastedRouter);

//feedack
app.use("/api/v1/", FeedbackRouter);





app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
























