import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const arrayOfPresidentsFrom7To9 = [
  'Andrew Jackson',
  'Martin Van Buren',
  'William Henry Harrison'
];

ReactDOM.render(
  <div>
    <ul>
      <li>George Washington</li>
      <li>John Adams</li>
      <li>Thomas Jefferson</li>
    </ul>
    <ol start="4">
      <li>James Madison</li>
      <li>James Monroe</li>
      <li>John Quincy Adams</li>
    </ol>
    <ul>
      {arrayOfPresidentsFrom7To9.map((president) =>
        <li key={president}>{president}</li>
      )}
    </ul>
  </div>,
  document.getElementById('root')
);
serviceWorker.unregister();
