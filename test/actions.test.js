import actions from './../src/actions';

test('Actions add', () => {
  const addResult = actions.add()({ num: 0 });

  expect(addResult).toEqual({
    num: 1,
  });
});

test('Actions sub', () => {
  const addResult = actions.sub()({ num: 1 });
  
  expect(addResult).toEqual({
    num: 0,
  });
});
