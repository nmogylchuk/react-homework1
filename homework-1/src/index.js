import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const arrayOfPresidentsFrom7To9 = [
  'Andrew Jackson',
  'Martin Van Buren',
  'William Henry Harrison'
];

const listOfPresidentsFrom10To14 = [
  {
    firstName: 'John',
    lastName: 'Tyler',
    presidentIndex: 10
  },
  {
    firstName: 'James K.',
    lastName: 'Polk',
    presidentIndex: 11
  },
  {
    firstName: 'Zachary',
    lastName: 'Taylor',
    presidentIndex: 12
  },
  {
    firstName: 'Millard',
    lastName: 'Fillmore',
    presidentIndex: 13
  },
  {
    firstName: 'Franklin',
    lastName: 'Pierce',
    presidentIndex: 14
  }
];

const formatedListOfPresidentsFrom10To14 = ({ firstName, lastName, presidentIndex }) => {
  return `${lastName}, ${firstName}, ${presidentIndex}th`;
}

const stylingForListOfPresidentsFrom10To14 = {
  backgroundColor: '#ddd',
  paddingTop: '1em',
  paddingBottom: '1em',
  fontWeight: 'bold',
}

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
        <li key={president}>
          {president}
        </li>
      )}
    </ul>
    <ul style={stylingForListOfPresidentsFrom10To14}>
      {listOfPresidentsFrom10To14.map(president =>
        president.presidentIndex % 2 === 1 ? (
          <li key={president.presidentIndex}>
            {formatedListOfPresidentsFrom10To14(president)}
          </li>
        ) : null
      )}
    </ul>
  </div>,
  document.getElementById('root')
);
serviceWorker.unregister();
