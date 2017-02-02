const update = {
  add: (model) => {
    const { num } = model;
    return { num: num + 1 };
  },
  sub: (model) => {
    const { num } = model;
    return { num: num - 1 };
  },
};

export default update;
