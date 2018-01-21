import { h } from 'hyperapp';
import Description from './Description';

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default ({ num }, { add, sub }) =>
  <div class="counter">
    <Description />
    <section>
      <button
        class="sub"
        onclick={sub}
        disabled={num < 1}
      >
        -
      </button>
      <h1 class="count">{num}</h1>
      <button
        class="add"
        onclick={add}
      >
        +
      </button>
    </section>
  </div>;
