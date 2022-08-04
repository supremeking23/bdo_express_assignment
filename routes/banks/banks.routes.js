const express = require("express");
const { dashboard, withdraw, deposit, updateBankDetail } = require("../../controller/Banks.controller");

const bankRouter = express.Router();

bankRouter.get("/", dashboard);
bankRouter.get("/withdraw", withdraw);
bankRouter.get("/deposit", deposit);
bankRouter.patch("/update-account/:account_number", updateBankDetail);
//patch
//post


module.exports = bankRouter;