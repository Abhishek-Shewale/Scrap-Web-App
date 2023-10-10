const crypto = require("crypto");

// Generate a random 32-byte (256-bit) secret key
const generateRandomSecretKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

// Export the random secret key as a constant
module.exports = {
  secretKey: generateRandomSecretKey(),
};
