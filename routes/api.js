const express    = require("express");
const userRouter = require("./users/users.routes");
const bankRouter = require("./banks/banks.routes");
const router     = express.Router();

router.use("/", bankRouter);
router.use("/", userRouter);


module.exports = router;