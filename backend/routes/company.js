const express = require("express");

const router = express.Router();

router.post("", CompanyController.createCompany);

module.exports = router;
