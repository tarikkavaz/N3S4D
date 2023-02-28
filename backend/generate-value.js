// Run: node generate-value.js

const crypto = require('crypto');

const randomValue = crypto.randomBytes(16).toString('hex');
console.log(randomValue);