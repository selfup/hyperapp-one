import { app } from 'hyperapp';
import update from './updates/counter';
import model from './models/counter';
import view from './views/counter';

app({ model, update, view });
