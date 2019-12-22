import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import React from 'react';
import { render } from 'react-dom';
import Fable from './components/Fable';
import '../css/fable.css';

const $app = document.getElementById('app');

render(
  <Fable />,
  $app
);
