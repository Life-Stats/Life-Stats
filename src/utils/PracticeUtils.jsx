// const fetch = require('node-fetch-commonjs');

export async function getHolidays(y, m, d) {
    console.log('date', y, m, d)
    let day = d.toString()
    let mon = m.toString()
    let year= y.toString()
  const holidayURL =
  `https://calendarific.com/api/v2/holidays?api_key=5569725de1b2efd0a970fb8ea04cca422a8f6af2&country=US&year=${year}&month=${mon}&day=${day}`;

  const fetchHoliday = await fetch(holidayURL);
  const data = await fetchHoliday.json();
  console.log('Holiday => ', data.response.holidays[0].name);
  return data.response.holidays[0].name;
};