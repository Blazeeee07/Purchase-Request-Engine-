const rules = require("../config/rules.json");
const { evaluateCondition } = require("../utils/expressionEvaluator");

function applyRulesToPR(prData) {
  const result = { ...prData };

  rules.approvalRules.forEach(rule => {
    if (evaluateCondition(rule.condition, prData)) {
      if (rule.action === "autoApprove") {
        result.status = rule.setStatus || "Approved";
      }
      if (rule.action === "setUrgency") {
        result.urgency = rule.urgency || "Normal";
      }
    }
  });

  return result;
}

module.exports = { applyRulesToPR };
