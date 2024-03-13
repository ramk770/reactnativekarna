const express = require("express");
const router = express.Router();
const DonarVegController = require("../controller/DonarvegController");

router.route('/veg').get(DonarVegController.getallveg)
.post(DonarVegController.createveg);
router.route('/veg/:id').get(DonarVegController.getOneVeg)
.put(DonarVegController.updateoneVeg)
.delete(DonarVegController.deleteOneVeg);

module.exports = router;