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

const findSign = (y, m, d) => {
  const days = ['', 20, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21, 20];
  const signs = ['', "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", 'Capricorn'];
  let day = d.toString()
  console.log('DAY', day)
  let month = m.toString()
  console.log('MONTH', month)
  console.log('SIGNS', signs[month]);
  return (day > days[month]) ? signs[month*1 + 1] : signs[month];


//   if(month == 0 && day <= 20){
//     month = 11;
//  }else if(day < days[month]){
//     month--;
//  };
//  console.log('HELLO', signs[month])
//  return signs[month];
}


export async function getHoroscope(y, m, d) {
  console.log(y, m, d)
  const sign = await findSign(y, m, d); 
  const horoscopeURL =
  `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;


  const fetchHoroscope = await fetch(horoscopeURL);
  const data = await fetchHoroscope.json();
  console.log('Horoscope => ', data.description);
  return data.description;
};



// _____________________________________ //
// const findSign = (d, m, y) => {
//   const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
//   const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo",    "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
//   let day = d.toString()
//   let month = m.toString()
//   if(month == 0 && day <= 20){
//     month = 11;
//  }else if(day < days[month]){
//     month--;
//  };
//  return signs[month];
