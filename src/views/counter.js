import { h } from 'hyperapp';

const view = (model, msg) => (
  <div className="counter">
    <h1>hyperapp-one</h1>
    <p><em>With JSX and Webpack</em></p>
    <hr />
    <section>
      <button
        className="sub"
        onClick={msg.sub}
        disabled={model.num <= 0}
      >-</button>
      <h1 className='count'>{model.num}</h1>
      <button
        className="add"
        onClick={msg.add}
      >+</button>
    </section>
  </div>
);

export default view;
