const express = require("express");
const bodyParser = require("body-parser");
const prRoutes = require("./routes/prRoute");

const app = express();
app.use(bodyParser.json());

app.use("/api", prRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`PR Rule Engine API running on http://localhost:${PORT}`);
});
