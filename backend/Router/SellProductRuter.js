const express = require("express");
const router = express.Router();
const Sellproduct = require("../controller/Sellproduct");

router.route('/sell').get(Sellproduct.getallsellproduct)
.post(Sellproduct.createSellproduct);
router.route('/sell/:id').delete(Sellproduct.deleteproduct);

module.exports = router;