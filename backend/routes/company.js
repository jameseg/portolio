const express = require("express");
const CompanyController = require("../controllers/company");

const router = express.Router();

router.post("", CompanyController.createCompany);

module.exports = router;
