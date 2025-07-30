const express = require("express");
const { processPR } = require("../controllers/prController");

const router = express.Router();
router.post("/processPR", processPR);

module.exports = router;
