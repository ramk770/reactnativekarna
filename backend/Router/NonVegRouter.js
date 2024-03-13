const express = require("express");
const router = express.Router();
const DonarNonVegController = require("../controller/DonarNonvegController");

router.route('/nonveg').get(DonarNonVegController.getallnonveg)
.post(DonarNonVegController.createnonveg);
router.route('/nonveg/:id').get(DonarNonVegController.getOnenonVeg)
.put(DonarNonVegController.updateonenonVeg)
.delete(DonarNonVegController.deleteOnenonVeg);

module.exports = router;