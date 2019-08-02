import { app } from 'hyperapp';
import '../styles/app.css';
import state from './state';
import view from './components/Counter';

const init = state;
const node = document.getElementById('app');

app({ init, view, node });
