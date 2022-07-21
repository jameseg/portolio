const express = require('express')
const CompanyController = require('../controllers/company')

const router = express.Router()

router.get('', CompanyController.fetchCompanies)
router.get('/:id', CompanyController.fetchSingleCompany)
router.delete('/:id', CompanyController.deleteCompany)
router.post('', CompanyController.createCompany)
router.put('/:id', CompanyController.updateCompany)
module.exports = router
