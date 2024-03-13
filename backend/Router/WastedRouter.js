
const express = require("express");
const router = express.Router();
const Wastedfood = require("../controller/WastedproductContoller");

router.route('/wasted').get(Wastedfood.getallWastedproduct)
.post(Wastedfood.createWastedproduct);
router.route('/wasted/:id').delete(Wastedfood.deleteWasted);

module.exports = router;