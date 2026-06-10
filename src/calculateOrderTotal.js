/**
 * TODO (Task 3): Calculate order total with tax.
 *
 * Requirements:
 * - Each item must have `price` (number) and `quantity` (integer >= 1).
 * - Ignore invalid items instead of throwing.
 * - Apply tax rate as a decimal (e.g. 0.08 for 8%).
 * - Return a number rounded to 2 decimal places.
 *
 * @param {Array<{ price: number, quantity: number }>} items
 * @param {number} taxRate
 * @returns {number}
 */
function calculateOrderTotal(items, taxRate) {
  let itemsIsArray = Array.isArray(items);
  if (!itemsIsArray) {
    return 0;
  }

  let total = 0;

  for (let item of items) {
    let isValid = isValidItem(item);
    if (isValid) {
      total += item.price * item.quantity;
    }
  }

  total += total * taxRate;
  
  return parseFloat(total.toFixed(2));
}

function isValidItem(item) {
  return (
    item &&
    typeof item.price === 'number' &&
    item.price > 0 &&
    Number.isInteger(item.quantity) &&
    item.quantity >= 1
  );
}

module.exports = { calculateOrderTotal };
