import { h } from 'hyperapp';

export default (state, msg) => (
  <div class="counter">
    <h1>hyperapp-one</h1>
    <p><em>With JSX and Webpack</em></p>
    <hr />
    <section>
      <button
        class="sub"
        onclick={msg.sub}
        disabled={state.num < 1}
      >
        -
      </button>
      <h1 class='count'>{state.num}</h1>
      <button
        class="add"
        onclick={msg.add}
      >
        +
      </button>
    </section>
  </div>
);
