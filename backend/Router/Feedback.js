const express = require("express");
const router = express.Router();
const FeedbackController = require("../controller/Feedbackcontroller");
router.route("/feedback").get(FeedbackController.getallFeedback)
.post(FeedbackController.createFeedback);

module.exports = router;







