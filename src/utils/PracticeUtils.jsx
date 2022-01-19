// const fetch = require('node-fetch-commonjs');

export async function getHolidays(date) {
  // const url = 'https://life-stats-app.herokuapp.com/api/v1/holiday'; // deployed Heroku URL
  const url = 'http://localhost:7890/api/v1/holiday';
  const response = await fetch(url, {

    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({date}) 
  });
  return response.json(); 
};
//--------------------- 

export async function getMainData(date) {
  // const url = 'https://life-stats-app.herokuapp.com/api/v1/holiday'; // deployed Heroku URL
  const url = 'http://localhost:7890/api/v1/main';
  const response = await fetch(url, {
    
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({date})
  });
  // console.log('JSON.stringify(date) example: ==>', JSON.stringify(date) )
  // console.log('response JSON is:  ', await response.json());
  return response.json(); 
};
//---------------------

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
