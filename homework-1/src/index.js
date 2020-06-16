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

const dataFromServer = [
  {
    "id": "666958530825467",
    "title": "Friday open-air party w/ Lucarelli, Mihas and Yarik JR | Hide",
    "place": "Hide",
    "date": "2020-06-12T20:00:00.000Z"
  },
  {
    "id": "786185895252176",
    "title": "Захист скверу імені Чкалова",
    "place": "Сквер Им. Чкалова",
    "date": "2020-06-10T09:00:00.000Z"
  },
  {
    "id": "623921328209118",
    "title": "Живая музыка на летней террасе",
    "place": "От Заката до Рассвета",
    "date": "2020-06-14T17:00:00.000Z"
  },
  {
    "id": "909559356190295",
    "title": "Amer (2009)",
    "place": "Кіноклуб Кіноха",
    "date": "2020-06-13T15:00:00.000Z"
  },
  {
    "id": "589272605321022",
    "title": "В парк Межигорье на теплоходе",
    "place": "Причал №6, Почтовая пл.",
    "date": "2020-06-13T07:45:00.000Z"
  }]

const getDay = (date) => {
  const formatedDate = new Date(date);
  const hoursOfDay = formatedDate.getHours();

  if (hoursOfDay >= 5 && hoursOfDay < 11) {
    return 'Morning';
  } else if (hoursOfDay >= 11 && hoursOfDay < 17) {
    return 'Day';
  } else if (hoursOfDay >= 17 && hoursOfDay < 21) {
    return 'Evening';
  } else {
    return 'Night';
  }
}

const getTime = (date) => {
  const formatedDate = new Date(date);
  let dd = (formatedDate.getDate() < 10 ? '0' : '') + formatedDate.getDate();
  let mm = ((formatedDate.getMonth() + 1) < 10 ? '0' : '') + (formatedDate.getMonth() + 1);
  let yyyy = formatedDate.getFullYear();
  let hh = formatedDate.getHours();
  let min = (formatedDate.getMinutes() < 10 ? '0' : '') + formatedDate.getMinutes();
  let sec = (formatedDate.getSeconds() < 10 ? '0' : '') + formatedDate.getSeconds();
  let newFormat = [dd, mm, yyyy].join('/') + ', ' + [hh, min, sec].join(':');
  return newFormat;
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
    <ul>
      {dataFromServer
        .sort((a, b) => (a.date > b.date ? 1 : -1))
        .map(event =>
          <li key={event.id}>
            <a
              href={`https://www.facebook.com/events/${event.id}/`}
              target='_blank'
              rel="noopener noreferrer">
              {event.title}
            </a>
            <p>{getDay(event.date) + ', ' + getTime(event.date)}</p>
            <p>{event.place}</p>
          </li>
        )}
    </ul>
  </div>,
  document.getElementById('root')
);
serviceWorker.unregister();
