import { app } from 'hyperapp';
import actions from './actions/counter';
import model from './models/counter';
import view from './views/counter';

app({ model, actions, view });
