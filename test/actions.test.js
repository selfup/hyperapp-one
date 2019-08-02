import { add, sub } from './../src/actions';

test('Actions add', () => {
  const addResult = add({ num: 0 });

  expect(addResult).toEqual({
    num: 1,
  });
});

test('Actions sub', () => {
  const addResult = sub({ num: 1 });

  expect(addResult).toEqual({
    num: 0,
  });
});
