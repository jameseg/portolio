const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const companyRoutes = require("./routes/company");

const app = express();

mongoose
  .connect(
    "mongodb+srv://jeg:" +
      process.env.MONGO_ATLAS_PW +
      "@portolio.uspgt.mongodb.net/investment"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log(process.env.MONGO_ATLAS_PW);
    console.log("Connection failed");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/companies", companyRoutes);

module.exports = app;
