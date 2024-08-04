const express = require("express");

const getBooks = require("../controller/bookController");

const router = express.Router();

router.get("/", getBooks);

module.exports = router;
