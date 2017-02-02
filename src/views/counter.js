import { html } from 'hyperapp';

const view = (model, msg) => (html`
  <div>
    <button
      onclick=${msg.add}
    >
      +
    </button>
    <h1>${model}</h1>
    <button
      onclick=${msg.sub}
      disabled=${model <= 0}
    >
      -
    </button>
  </div>
`);

export default view;
