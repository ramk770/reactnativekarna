const express = require("express");
const router = express.Router();
const Freeproduct = require("../controller/FreeProductController");

router.route('/free').get(Freeproduct.getallFreeproduct)
.post(Freeproduct.createFreeproduct);
router.route('/free/:id').delete(Freeproduct.deleteproduct);

module.exports = router;