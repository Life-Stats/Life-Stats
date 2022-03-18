// const fetch = require('node-fetch-commonjs');

export async function getHolidays(date) {
  // const url = 'https://life-stats-app.herokuapp.com/api/v1/holiday'; // deployed Heroku URL
  const url = 'http://localhost:7890/api/v1/holiday';
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ date }),
  });
  return response.json();
}

//---------------------

export async function getMainData(date) {
  // const url = 'https://life-stats-app.herokuapp.com/api/v1/main'; // deployed Heroku URL
  const url = 'http://localhost:7890/api/v1/main';
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ date }),
  });
  return response.json();
}
