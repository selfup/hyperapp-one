import { html } from 'hyperapp';

const view = (model, msg) => (html`
  <div class="counter">
    <h1>Welcome to the hyperapp-one boilerplate!</h1>
    <hr class="line-break" />
    <section>
      <button
        class="add"
        onclick=${msg.add}
      >
        +
      </button>
      <h1>${model.num}</h1>
      <button
        class="sub"
        onclick=${msg.sub}
        disabled=${model.num <= 0}
      >
        -
      </button>
    </section>
  </div>
`);

export default view;
