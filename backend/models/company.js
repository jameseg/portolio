const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
  ticker: { type: String, required: true },
  name: { type: String, required: true },
})

module.exports = mongoose.model('Company', companySchema)
