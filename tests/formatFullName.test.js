const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

const { formatFullName } = require('../src/formatFullName');

describe('formatFullName', () => {
  it('formats names as "Last, First"', () => {
    assert.equal(formatFullName('Ada', 'Lovelace'), 'Lovelace, Ada');
  });

  it('trims surrounding whitespace', () => {
    assert.equal(formatFullName('  Ada  ', '  Lovelace  '), 'Lovelace, Ada');
  });

  it('returns empty string when a name is missing or blank', () => {
    assert.equal(formatFullName('', 'Lovelace'), '');
    assert.equal(formatFullName('Ada', ''), '');
    assert.equal(formatFullName('   ', 'Lovelace'), '');
  });
});
