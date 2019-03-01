import Description from './../src/components/Description';

// Because this is a static component we just verify the results of h calls
test('Description component renders', () => {
  expect(Description()).toEqual({
    children: [
      {
        children: ['hyperapp-one'],
        nodeName: 'h1',
        attributes: {},
        key: null,
      },
      {
        children: [
          {
            children: ['With JSX and Webpack'],
            nodeName: 'em',
            attributes: {},
            key: null,
          },
        ],
        nodeName: 'p',
        attributes: {},
        key: null,
      },
      {
        children: [],
        nodeName: 'hr',
        attributes: {},
        key: null,
      },
    ],
    nodeName: 'div',
    attributes: {},
    key: null,
  });
});
