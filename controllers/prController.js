const { applyRulesToPR } = require("../services/prService");

const isValidPR = (prData) => {
  if (!prData) return { valid: false, message: "Invalid PR input" };

  const { totalAmount, deliveryDays } = prData;

  if (totalAmount === undefined || deliveryDays === undefined) {
    return {
      valid: false,
      message: "Invalid PR input: totalAmount or deliveryDays is missing.",
    };
  }

  if (
    typeof totalAmount !== "number" || totalAmount <= 0 ||
    typeof deliveryDays !== "number" || deliveryDays <= 0
  ) {
    return {
      valid: false,
      message: "totalAmount and deliveryDays must be positive numbers",
    };
  }

  return { valid: true };
};

const processPR = async (req, res) => {
  try {
    const prData = req.body;

    const validation = isValidPR(prData);
    if (!validation.valid) {
      return res.status(400).json({ error: validation.message });
    }

    const result = applyRulesToPR(prData);
    return res.status(200).json(result);
  } catch (err) {
    console.error("Unexpected error while processing PR:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// class PRController {
//   constructor() {
//     this.MAX_RETRIES = 3;
//     this.retryTracker = {};
//   }

//   isValidPR(prData) {
    
//     return { valid: true };
//   }

//   processPR = async (req, res) => {
//     try {
//       // isValidPR(req.body);
//       // my main logic
//       return res.json({msg:"Welcome to pr engine Service"})
//     } catch (err) {
      
//     }
//   };
// }
// module.exports = new PRController();
module.exports = { processPR };
