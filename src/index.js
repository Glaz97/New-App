/**
 * Public module exports for the challenge.
 * You do not need to edit this file.
 */

const { formatFullName } = require('./formatFullName');
const { isValidEmail } = require('./isValidEmail');
const { calculateOrderTotal } = require('./calculateOrderTotal');

module.exports = {
  formatFullName,
  isValidEmail,
  calculateOrderTotal,
};
