import Description from './../src/components/Description';

// Because this is a static component we just verify the results of h calls
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
