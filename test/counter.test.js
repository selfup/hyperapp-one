import { h, app } from 'hyperapp';
import appActions from './../src/actions';
import appState from './../src/state';
import Counter from './../src/components/Counter';

// This is not a static component so we inject it into an app and test it
// This is a unit test and we are not testing actual clicks
// We are simply testing via exposed actions
// And checking the DOM for state changes
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
