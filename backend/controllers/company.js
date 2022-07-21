const Company = require("../models/company");

exports.createCompany = (req, res, next) => {
  const company = new Company({
    ticker: req.body.ticker,
    name: req.body.name,
  });
  console.log("company " + company);
  company
    .save()
    .then((createdCompany) => {
      res.status(201).json({
        message: "Company added successfully.",
        company: {
          ...createdCompany,
          id: createdCompany._id,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Create company failed.", error: err });
    });
};
