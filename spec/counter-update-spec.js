/* eslint-disable no-param-reassign, linebreak-style */
/* globals describe, it, expect */

const update = require('./../src/updates/counter');

describe('Counter Update', () => {
  it('is an object of functions', () => {
    expect(typeof update).toEqual('object');
    expect(typeof update.add).toEqual('function');
    expect(typeof update.sub).toEqual('function');
  });

  it('adds by 1', () => {
    const model = 0;
    const result = update.add(model);
    expect(result).toEqual(1);
  });

  it('subtracts by 1', () => {
    const model = 10;
    const result = update.sub(model);
    expect(result).toEqual(9);
  });
});
