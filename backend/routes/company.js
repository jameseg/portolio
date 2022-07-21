const express = require('express')
const CompanyController = require('../controllers/company')

const router = express.Router()

router.post('', CompanyController.createCompany)
router.get('', CompanyController.fetchCompanies)
router.get('/:id', CompanyController.fetchSingleCompany)
router.delete('/:id', CompanyController.deleteCompany)

module.exports = router
