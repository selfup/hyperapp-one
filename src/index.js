import { app } from 'hyperapp';
import actions from './actions';
import state from './state';
import view from './components/Counter';

app({ state, actions, view });
