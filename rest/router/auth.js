const auth = require("../controllers/auth");
const express = require('express');
const router = express.Router();

router.post("/login",auth.loginUser)
router.post("/register",auth.registerUser)

module.exports =router