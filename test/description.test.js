import Description from './../src/components/Description';

test('Description component renders', () => {
  expect(Description()).toEqual({
    children: [{
      children: ['hyperapp-one'],
      name: 'h1',
      props: {},
    },
    {
      children: [{
        children: ['With JSX and Webpack'],
        name: 'em',
        props: {},
      }],
      name: 'p',
      props: {},
    },
    {
      children: [],
      name: 'hr',
      props: {},
    }],
    name: 'div',
    props: {},
  });
});
