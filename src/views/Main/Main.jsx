import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Styles from './Main.css';
import Aos from 'aos';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';

export default function Main() {
  const [date, setDate] = useState('');
  const [breathsState, setBreathsState] = useState();
  const [heartBeats, setHeartBeats] = useState();
  const [blinks, setBlinks] = useState();
  const [yearsAsleep, setYearsAsleep] = useState();
  const [dreamDays, setDreamDays] = useState();
  const [globalExtinction, setGlobalExtinction] = useState();
  const [d, setDay] = useState('');
  const [m, setMonth] = useState('');
  const [y, setYear] = useState('');
  const [show, setShow] = useState(true);

  let today = new Date();
  let todayYear = Number(today.getFullYear());
  let todayMonth = Number(today.getMonth() + 1);
  let todayDay = Number(today.getDate());

  const dailySeconds = 86400;
  const breathsPerSecond = 0.267;
  const heartBeatsPerSecond = 1.3;
  const blinksPerSecond = 0.225;
  //   const monthlySeconds = 2628288;
  //   const yearlySeconds = 31536000;

  class DateCon {
    constructor(d, m, y) {
      this.d = d;
      this.m = m;
      this.y = y;
    }
  }

  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function countLeapYears(d) {
    let years = d.y;

    if (d.m <= 2) {
      years--;
    }
    return (
      Math.floor(years / 4) - Math.floor(years / 100) + Math.floor(years / 400)
    );
  }

  function getDifference(dt1, dt2) {
    let n1 = dt1.y * 365 + dt1.d;

    for (let i = 0; i < dt1.m - 1; i++) {
      n1 += monthDays[i];
    }
    n1 += countLeapYears(dt1);

    let n2 = dt2.y * 365 + dt2.d;
    for (let i = 0; i < dt2.m - 1; i++) {
      n2 += monthDays[i];
    }
    n2 += countLeapYears(dt2);
    return n2 - n1;
  }

  let dt1 = new DateCon(d, m, y);
  let dt2 = new DateCon(todayDay, todayMonth, todayYear);
  const totalNumOfDays = getDifference(dt1, dt2);

  const newTotalBreaths = Math.floor(
    totalNumOfDays * dailySeconds * breathsPerSecond
  );
  const totalHeartBeats = totalNumOfDays * dailySeconds * heartBeatsPerSecond;
  const totalBlinks = totalNumOfDays * dailySeconds * blinksPerSecond;
  const totalDreamDays = Math.ceil((totalNumOfDays * 2) / 24);
  const totalYearsAsleep = (totalNumOfDays / 3 / 365).toFixed(2);
  const totalExtinct = totalNumOfDays * 150;

  const x = show;

  const handleSubmit = (event) => {
    event.preventDefault();

    function mungedDate(date) {
      let newDate = date;
      let splitDate = newDate.split('-'); // ex: ['2022', '11', '03']
      let d = Number(splitDate.reverse()[0]); // ex: ['01', '10', '1988']
      let m = Number(splitDate.reverse()[1]); // ex: ['01', '10', '1988']
      let y = Number(splitDate.reverse()[2]); // ex: ['01', '10', '1988']
      setDay(d);
      setMonth(m);
      setYear(y);
      return [d, m, y];
    }
    setShow(false);
    setBreathsState(mungedDate(date));
    setHeartBeats(mungedDate(date));
    setBlinks(mungedDate(date));
    setYearsAsleep(mungedDate(date));
    setDreamDays(mungedDate(date));
    setGlobalExtinction(mungedDate(date));
  };

  
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  

  return (
    <>
  
      {show && (
        <div className={Styles.formSubmit}>
          <form onSubmit={handleSubmit} className="Main">
            <label htmlFor="start">Enter your Birthday: </label>
            <input
              id="start"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
            <button type="submit" value="submit">
              {show ? 'Submit' : 'Not'}
            </button>
          </form>
        </div>
      )}

      <section className={Styles.infoSection}>
        <div>
          {breathsState ? (
            <p data-aos="fade-left">You've taken {`${newTotalBreaths}`} breaths!</p>
          ) : null}
        </div>

        <div>
          {heartBeats ? (
            <p data-aos="fade-right">You're heart has beaten {`${totalHeartBeats}`} times!</p>
          ) : null}
        </div>

        <div>
          {blinks ? (
          <p data-aos="fade-up">You have blinked {`${totalBlinks}`} times!</p> 
          ) : null}
        </div>

        <div>
          {yearsAsleep ? (
            <p data-aos="fade-up">
              {`${totalYearsAsleep}`} years of your life has been spent asleep!
            </p>
          ) : null}
        </div>

        <div  >
          {dreamDays ? (
            <p data-aos="fade-up">
              {`${totalDreamDays}`} days of your life has been spent just dreaming!
            </p>
          ) : null}
        </div>

        <div  >
          {globalExtinction ? (
            <p data-aos="fade-up">
              Some estimated total {`${totalExtinct}`} species of animal life
              have since gone extinct..
            </p>
          ) : null}
        </div>
      </section>
      
    </>
  );
}

// This function below handles running timer implementation..
// let count = 3000; // count value will be related to after munged number date calc
//  const counter=setInterval(timer, 1000); //1000 will run it every 1 second

// function timer()
// {
//   count=count+1;
//   if (count <= 0)
//   {
//      clearInterval(counter);
//      //counter ended, do something here
//      return;
//   }
//   //Do code for showing the number of seconds here
//     document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
// } // NOTE: timer ^ is id in HTML
// timer()
