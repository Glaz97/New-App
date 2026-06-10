const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

const { calculateOrderTotal } = require('../src/calculateOrderTotal');

describe('calculateOrderTotal', () => {
  it('sums valid items and applies tax', () => {
    const items = [
      { price: 10, quantity: 2 },
      { price: 5.5, quantity: 1 },
    ];

    assert.equal(calculateOrderTotal(items, 0.1), 28.05);
  });

  it('ignores invalid items', () => {
    const items = [
      { price: 10, quantity: 1 },
      { price: '10', quantity: 1 },
      { price: 5, quantity: 0 },
      { price: 5, quantity: 1.5 },
      null,
    ];

    assert.equal(calculateOrderTotal(items, 0), 10);
  });

  it('rounds the result to two decimal places', () => {
    const items = [{ price: 10.333, quantity: 3 }];

    assert.equal(calculateOrderTotal(items, 0.075), 33.32);
  });
});
