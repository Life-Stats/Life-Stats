import React, { useState } from 'react';
import { getFake } from '../../utils/utils';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';

export default function Main() {
  // const [selectedBirthDate, setSelectedBirthDate] = useState(null);
  // const [date, setDate] = useState('');
  const [breathsState, setBreathsState] = useState();
  // const [totalBreaths, setTotalBreaths] = useState();
  // const [d, setDay] = useState('');
  // const [m, setMonth] = useState('');
  // const [y, setYear] = useState('');

  // let today = new Date();
  // console.log('TODAY', today);
  // let todayYear = Number(today.getFullYear());
  // let todayMonth = Number(today.getMonth() + 1);
  // let todayDay = Number(today.getDate());
  // // let todayObj = { todayDay, todayMonth, todayYear };
  // // console.log(todayObj, 'TODAYOBJ');
  // const dailySeconds = 86400;
  // const monthlySeconds = 2628288;
  // const yearlySeconds = 31536000;
  // const breathsPerSecond = 0.267;

  // class DateCon {
  //   constructor(d, m, y) {
  //     this.d = d;
  //     this.m = m;
  //     this.y = y;
  //   }
  // }

  // let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // function countLeapYears(d) {
  //   let years = d.y;

  //   if (d.m <= 2) {
  //     years--;
  //   }
  //   return (
  //     Math.floor(years / 4) - Math.floor(years / 100) + Math.floor(years / 400)
  //   );
  // }

  // function getDifference(dt1, dt2) {
  //   let n1 = dt1.y * 365 + dt1.d;

  //   for (let i = 0; i < dt1.m - 1; i++) {
  //     n1 += monthDays[i];
  //   }
  //   n1 += countLeapYears(dt1);

  //   let n2 = dt2.y * 365 + dt2.d;
  //   for (let i = 0; i < dt2.m - 1; i++) {
  //     n2 += monthDays[i];
  //   }
  //   n2 += countLeapYears(dt2);
  //   return n2 - n1;
  // }

  // let dt1 = new DateCon(d, m, y);
  // let dt2 = new DateCon(todayDay, todayMonth, todayYear);
  // const totalNumOfDays = getDifference(dt1, dt2);
  // const newTotal = totalNumOfDays * dailySeconds * breathsPerSecond;

  // // let count = newTotal;
  // // const counter = setInterval(timer, 1000); //1000 will run it every 1 second

  // // function timer() {
  // //   count = count + 1;
  // //   if (count <= 0)
  // //   {
  // //     clearInterval(counter);
  // //     return;
  // //   }
  // //   return count;
  // // }
  // // timer()

  const handleSubmit = async (event) => {
    event.preventDefault();
    // FETCH BE API WITH DATE VALUE
    const fetchedDays = await getFake();
    console.log(fetchedDays, 'FFFFEETTTCHHHH');

    setBreathsState(fetchedDays);
  };

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
