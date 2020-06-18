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


let data = {
  name: '',
  password: '',
  plan: 'basic',
  newsletter: true
}

const handleChange = (event) => {
  data = { ...data, [event.target.name]: event.target.value };
}

let url = 'https://postman-echo.com/post';
const handleSubmit = (event) => {
  event.preventDefault();
  try {
    fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
        },
        mode: 'no-cors',
        body: JSON.stringify(data)
      })
      .then(console.log('Success'));
  } catch (error) {
    console.error('Error: ', error);
  }
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
        .map(event => {
          return (
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
          );
        }
        )}
    </ul>

    <form className='form' onSubmit={handleSubmit}>
      <fieldset>
        <div className='form__item'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            name='name'
            pattern='[A-Za-z]{1,32}'
            title='Your name should only contain upper and lowercase letters (e.g. Ivan)'
            placeholder='Put your name'
            minLength='2'
            required
            onChange={handleChange} />
        </div>
        <div className='form__item'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            pattern='.{6,}'
            title='Your name should only contain 6 or more characters'
            placeholder='Put your password'
            minLength='4'
            required
            onChange={handleChange} />
        </div>
        <div className='form__item'>
          <label>Basic plan</label>
          <input
            type='radio'
            name='plan'
            value='basic'
            defaultChecked
            onChange={handleChange} />
        </div>
        <div className='form__item'>
          <label>Premium plan</label>
          <input
            type='radio'
            name='plan'
            value='premium'
            onChange={handleChange} />
        </div>
        <div htmlFor='newsletter' className='form__item'>
          <label>Subscribe to our newsletters</label>
          <input
            id='newsletter'
            type='checkbox'
            name='newsletter'
            defaultChecked
            onChange={handleChange} />
        </div>
        <button type='submit'>Submit</button>
      </fieldset>
    </form>
  </div>,
  document.getElementById('root')
);
serviceWorker.unregister();