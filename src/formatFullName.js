/**
 * TODO (Task 1): Return a full name in "Last, First" format.
 *
 * Requirements:
 * - Trim whitespace from both names.
 * - Return an empty string if either name is missing or blank after trimming.
 *
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string}
 */
function formatFullName(firstName, lastName) {
  // trim to handle null/undefined safely
  const first = (firstName ?? '').trim();
  const last = (lastName ?? '').trim();

  // values are not empty after trimming
  if (!first || !last) {
    return '';
  }

  return `${last}, ${first}`;
}

module.exports = { formatFullName };
