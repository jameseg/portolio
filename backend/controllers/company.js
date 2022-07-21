const Company = require('../models/company')

exports.createCompany = (req, res, next) => {
  const company = new Company({
    ticker: req.body.ticker,
    name: req.body.name,
  })
  console.log('company ' + company)
  company
    .save()
    .then(createdCompany => {
      res.status(201).json({
        message: 'Company added successfully.',
        company: {
          ...createdCompany,
          id: createdCompany._id,
        },
      })
    })
    .catch(err => {
      res.status(500).json({ message: 'Create company failed.', error: err })
    })
}

exports.fetchCompanies = (req, res, next) => {
  const pageSize = +req.query.pagesize
  const currentPage = +req.query.page
  const companyQuery = Company.find()
  let fetchCompanies
  if (pageSize && currentPage) {
    companyQuery.skip(pageSize * (currentPage - 1)).limit(pageSize)
  }
  console.log(req.query)
  companyQuery
    .then(documents => {
      fetchCompanies = documents
      return Company.count()
    })
    .then(count => {
      res.status(200).json({
        message: 'Companies fetched successfully.',
        companies: fetchCompanies,
        maxCompanies: count,
      })
    })
    .catch(error => {
      res.status(500).json({ message: 'fetch companies failed.' })
    })
}

exports.fetchSingleCompany = (req, res, next) => {
  Company.findById(req.params.id)
    .then(company => {
      if (company) {
        console.log(company)
        res.status(200).json(company)
      } else {
        res
          .status(404)
          .json({ message: `No company found with id: ${req.params.id}` })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'fetch single company failed.' })
    })
}

exports.deleteCompany = (req, res, next) => {
  console.log(req.params.id)
  Company.deleteOne({ _id: req.params.id })
    .then(result => {
      console.log(result)
      res.status(200).json({
        message: 'Company deleted.',
      })
    })
    .catch(error => {
      res.status(500).json({ message: 'delete company failed.', error: error })
    })
}
