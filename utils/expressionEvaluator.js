const { Parser } = require("expr-eval");

function evaluateCondition(condition, context) {
  try {
    const parser = new Parser();
    const expr = parser.parse(condition);
    return expr.evaluate(context);
  } catch (error) {
    console.error("Error evaluating condition:", condition, error.message);
    return false;
  }
}

module.exports = { evaluateCondition };
