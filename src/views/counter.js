import { h } from 'hyperapp';

const view = (model, msg) => (
  <div className="counter">
    <h1>Welcome to the hyperapp-one boilerplate!</h1>
    <p><em>With JSX</em></p>
    <hr className="line-break" />
    <section>
      <button
        className="add"
        onclick={msg.add}
      >
        +
      </button>
      <h1>{model.num}</h1>
      <button
        className="sub"
        onclick={msg.sub}
        disabled={model.num <= 0}
      >
        -
      </button>
    </section>
  </div>
);

export default view;
