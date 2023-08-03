const express = require("express");
const router = express.Router();
const {
	getAllProducts,
	testSite,
	filtering,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/test").get(testSite);
router.route("/filter").get(filtering);

module.exports = router;
