/* eslint-disable no-param-reassign, linebreak-style */
/* globals describe, it, expect */

const model = require('./../src/models/counter');

describe('Counter Model', () => {
  it('is 0', () => {
    expect(model).toEqual(0);
  });
});
