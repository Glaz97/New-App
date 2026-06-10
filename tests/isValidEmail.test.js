const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

const { isValidEmail } = require('../src/isValidEmail');

describe('isValidEmail', () => {
  it('accepts valid email addresses', () => {
    assert.equal(isValidEmail('ada@example.com'), true);
    assert.equal(isValidEmail('a.b@c.co'), true);
  });

  it('rejects invalid email addresses', () => {
    assert.equal(isValidEmail('not-an-email'), false);
    assert.equal(isValidEmail('missing@domain'), false);
    assert.equal(isValidEmail('@example.com'), false);
    assert.equal(isValidEmail('user@'), false);
    assert.equal(isValidEmail('user@@example.com'), false);
  });

  it('returns false for non-string input', () => {
    assert.equal(isValidEmail(null), false);
    assert.equal(isValidEmail(42), false);
  });
});
