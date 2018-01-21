import { h, app } from 'hyperapp';
import appActions from './../src/actions';
import appState from './../src/state';
import Counter from './../src/components/Counter';

beforeEach(() => {
  document.body.innerHTML = '';
});

test('Counter test', (done) => {
  const view = (state, actions) => h(
    'div',
    {
      oncreate() {
        expect(!document.body.innerHTML.includes('0')).toBe(true);
        expect(document.body.innerHTML.includes('1')).toBe(true);
        done();
      },
    },
    [Counter(state, actions)],
  );

  const main = app(appState, appActions, view, document.body);

  main.add();
});

test('Counter test', (done) => {
  const view = (state, actions) => h(
    'div',
    {
      oncreate() {
        expect(!document.body.innerHTML.includes('0')).toBe(true);
        expect(document.body.innerHTML.includes('-1')).toBe(true);
        done();
      },
    },
    [Counter(state, actions)],
  );

  const main = app(appState, appActions, view, document.body);

  main.sub();
});
