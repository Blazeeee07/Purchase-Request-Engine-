const express = require("express");
const { processPR } = require("../controllers/prController");
// const PRController = require("../controllers/prController");
const prLimiter=require("../utils/rateLimiter")


const router = express.Router();
// router.post("/processPR", PRController.processPR);
router.post("/processPR", prLimiter, processPR);


module.exports = router;
