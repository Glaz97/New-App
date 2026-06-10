/**
 * TODO (Task 2): Validate a basic email address.
 *
 * Requirements:
 * - Must contain exactly one "@".
 * - Must have at least one character before "@" and after "@".
 * - Domain part must include a "." with at least one character on each side.
 * - Return false for non-string input.
 *
 * @param {unknown} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  // reject non-string input
  if (typeof email !== 'string') {
    return false;
  }

  // split into local and domain parts
  const parts = email.split('@');
  if (parts.length !== 2) {
    return false;
  }

  const [local, domain] = parts;

  // local and domain must be not empty
  if (local.length == 0 || domain.length == 0) {
    return false;
  }

  if (!domain.includes('.')) {
    return false;
  } 

  // each domain label must be non-empty
  const domainParts = domain.split('.');
  const isEmpty = domainParts.some(part => part.length === 0);
  if (isEmpty) {
    return false;
  }

  return true;
}

module.exports = { isValidEmail };
