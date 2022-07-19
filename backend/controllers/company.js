exports.createCompany = (req, res, next) => {
  const company = new Company({
    ticker: req.body.ticker,
    name: req.body.name,
  });
  console.log("companyj " + company);
};
