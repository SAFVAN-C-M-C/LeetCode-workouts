const crypto = require('crypto');

// Generate a random secret key with 32 bytes length
const secretKey = crypto.randomBytes(32).toString('hex');

console.log("Generated Secret Key:", secretKey);