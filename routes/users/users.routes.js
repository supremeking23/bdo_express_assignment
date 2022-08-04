const express = require("express");
const { UpdateSingleUser, landingPage, signUp, signIn, addUser, signInProcess } = require("../../controller/Users.controller");

const userRouter = express.Router();


userRouter.get("/signup", signUp);
userRouter.get("/signin", signIn);
userRouter.post("/add-user", addUser);
userRouter.post("/sign-in-process", signInProcess);

module.exports = userRouter;