# Purchase-Request-Engine-

A Node.js-based Purchase Request (PR) Rule Engine that evaluates approval rules dynamically using safe expression parsing.

## 🚀 Features

- Dynamic rule evaluation via `expr-eval` (no `eval` usage)
- Clean MVC-style project structure
- JSON-configurable rules for easy extension
- Input validation with clear error responses
- Supports rules like auto-approve and setting urgency levels


## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **expr-eval** for secure rule parsing

## 🧪 Input Validation

- `totalAmount` and `deliveryDays` must be **positive numbers**
- Missing or invalid fields return `400 Bad Request`

## ⚙️ Setup Instructions

1. **Clone the repository**
git clone https://github.com/your-username/Purchase-Request-Engine-.git

3. **Install dependencies**
npm install

4. **Start the server**
node index.js


## Sample API Request 

POST /api/processPR

Request Body:
{
  "totalAmount": 5000,
  "deliveryDays": 2
}

Sample Response:
{
  "totalAmount": 5000,
  "deliveryDays": 2,
  "urgency": "High"
}







