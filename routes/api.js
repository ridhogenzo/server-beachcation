const router = require("express").Router();
const apiController = require("../controllers/apiController");
// const { uploadSingle, uploadMultiple } = require("../middleware/multer");

router.get("/landing-page", apiController.landingPage);
router.get("/detail-page/:id", apiController.detailPage);
router.post("/booking-page", apiController.bookingPage);
module.exports = router;
