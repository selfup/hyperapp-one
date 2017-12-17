import { app } from 'hyperapp';
import actions from './actions';
import state from './state';
import view from './components/Counter';

const {
  add,
  sub,
} = app(
  state,
  actions,
  view,
  document.body,
);

/**
 * hyperapp exposes its actions
 * i like to see it as a dispatch
 * this is just an example of calling the actions from outside of hyperapp!!
 * think of it as a hub to talk to other apps/frameworks/vanillaJS
 * here is an example on codepen: https://codepen.io/selfup/pen/jLMRjO
 */
setTimeout(add, 1000);
setTimeout(sub, 2000);
