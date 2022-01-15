import React, { useState, useEffect } from 'react';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';

export default function Main() {
  // const [selectedBirthDate, setSelectedBirthDate] = useState(null);
  const [date, setDate] = useState('');
  const [breathsState, setBreathsState] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    function mungedDate(date) {
      let newDate = date;
      let splitDate = newDate.split('-'); // ex: ['2022', '11', '03']
      // console.log(splitDate[0]) // ex: 2022
      let today = new Date(); // gets current date ex: Fri 2022 14 01
      let todaysYear = today.getFullYear();
      let todaysMonth = today.getMonth();
      let todaysDay = today.getDate();
      // we need to subtract current year from selected year
      let yearDiff = todaysYear - splitDate[0]; //ex 2022 - 2002 = 20
      let todaysMonthIsGreater = 
      let monthDiff = splitDate[1] > todaysMonth ?  :; //ex 9 > 4 ? that means they took less breaths - need to subtract the number of seconds for each month to until month
      let dayDiff = todaysDay - splitDate[2];
      // console.log(yearDiff); // ex: 3 if 2019 was chosen
      // outcome multiplied by yearly seconds variable
      let yearSecsTotal = yearlySeconds * yearDiff; // confirmed ex 31536000 * 20 = 630720000
      let numberOfBreathsInYear = yearSecsTotal * breathsPerSecond; //ex 630720000 * .25
      // console.log(numberOfBreathsInYear);
      // +'-'+(today.getMonth()+1)+'-'+today.getDate();
      // let splitTodaysDate = todaysDate.split('-')
      // console.log(todaysDate.toString());
      // setMungeState(numberOfBreathsInYear);
      return numberOfBreathsInYear;
    }
    setBreathsState(mungedDate(date));
  };

  const dailySeconds = 86400;
  const monthlySeconds = 2628288;
  const yearlySeconds = 31536000;
  const breathsPerSecond = 0.25;

  // console.log(date); // ex: '2022-11-03'

  // console.log('MUNGED', mungedDate);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="start">Enter your Birthday</label>
      <input
        id="start"
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <button type="submit" value="submit">
        Submit
      </button>

      <div>
        {breathsState ? (
          <p>You've taken {`${breathsState}`} breaths since your birthday</p>
        ) : null}
      </div>
      {/* <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input> */}

      {/* <DatePicker className={DatePicker}
        value={selectedBirthDate}
        onChange={setSelectedBirthDate}
        inputPlaceholder="Select your birthdate"
      /> */}
    </form>
  );
}
