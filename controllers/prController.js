const { applyRulesToPR } = require("../services/prService");

const processPR = (req, res) => {
  const prData = req.body;

  if (!prData) return res.status(400).json({ error: "Invalid PR input" });

  if (!prData.totalAmount || !prData.deliveryDays) return res.status(400).json({ error: "Invalid PR input: totalAmount or deliveryDays is missing." });

  if (
  typeof prData.totalAmount !== "number" || prData.totalAmount <= 0 ||
  typeof prData.deliveryDays !== "number" || prData.deliveryDays <= 0
) {
  return res.status(400).json({ error: "totalAmount and deliveryDays must be positive numbers" });
}

  const result = applyRulesToPR(prData);
  res.status(200).json(result);
};

module.exports = { processPR };
