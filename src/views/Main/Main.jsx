import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Styles from './Main.css';
import Aos from 'aos';
import { getHolidays } from '../../utils/PracticeUtils.jsx';
import { getMainData } from '../../utils/PracticeUtils.jsx';

// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';

export default function Main() {
  const [date, setDate] = useState('');
  const [breathsState, setBreathsState] = useState('');
  const [heartBeats, setHeartBeats] = useState('');
  const [blinks, setBlinks] = useState(0);
  const [yearsAsleep, setYearsAsleep] = useState('');
  const [dreamDays, setDreamDays] = useState('');
  const [globalExtinction, setGlobalExtinction] = useState('');
  const [show, setShow] = useState(true);
  const [holiday, setHoliday] = useState();
  const [hairGrowth, setHairGrowth] = useState('');
  // const [horoscope, setHoroscope] = useState('');

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  function ticker() {
    setInterval(() => {
      setBlinks((prevState) => prevState + 1);
    }, 3000);
    setInterval(() => {
      setHeartBeats((prevState) => prevState + 1);
    }, 900);
    setInterval(() => {
      setBreathsState((prevState) => prevState + 1);
    }, 3000);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setHoroscope(await getHoroscope(date));
    ticker();
    setShow(false);
    setHoliday(await getHolidays(date));
    const allObjectsData = await getMainData(date);

    const breathTotal = allObjectsData.newTotalBreaths;
    setBreathsState(breathTotal);

    const finalHeartBeats = allObjectsData.totalHeartBeats;
    setHeartBeats(finalHeartBeats);

    const finalYearsAsleep = allObjectsData.totalYearsAsleep;
    setYearsAsleep(finalYearsAsleep);

    const finalBlinks = allObjectsData.totalBlinks;
    setBlinks(finalBlinks);
    console.log(typeof finalBlinks);

    const finalDreamDays = allObjectsData.totalDreamDays;
    setDreamDays(finalDreamDays);

    const finalExtinctRate = allObjectsData.totalExtinct;
    setGlobalExtinction(finalExtinctRate);

    const finalHairGrowth = allObjectsData.totalHairGrowth;
    setHairGrowth(finalHairGrowth);

  };

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
            <button aria-label="button" type="submit" value="submit">
              {show ? 'Submit' : 'Not'}
            </button>
          </form>
        </div>
      )}

      <section className={Styles.infoSection}>
        <div>
          {holiday ? (
            <p aria-label="holiday" data-aos="fade-up">
              Did you know {`${holiday}`} lands on your birthday!?
            </p>
          ) : null}
        </div>

        <div>
          {breathsState ? (
            <p data-aos="fade-left">
              You've taken {`${breathsState.toLocaleString()}`} breaths!
            </p>
          ) : null}
        </div>

        <div>
          {heartBeats ? (
            <p data-aos="fade-right">
              You're heart has beaten {`${heartBeats.toLocaleString()}`} times!
            </p>
          ) : null}
        </div>

        <div>
          {blinks ? (
            <p data-aos="fade-up">
              You have blinked {`${blinks.toLocaleString()}`} times!
            </p>
          ) : null}
        </div>

        <div>
          {yearsAsleep ? (
            <p data-aos="fade-up">
              {`${yearsAsleep}`} years of your life has been spent asleep!
            </p>
          ) : null}
        </div>

        <div>
          {dreamDays ? (
            <p data-aos="fade-up">
              {`${dreamDays.toLocaleString()}`} days of your life has been spent just dreaming!
            </p>
          ) : null}
        </div>

        <div>
          {globalExtinction ? (
            <p data-aos="fade-up">
              Some estimated up to {`${globalExtinction.toLocaleString()}`}{' '}
              species of animal life have since gone extinct..
            </p>
          ) : null}
        </div>

        <div>
          {hairGrowth ? (
            <p data-aos="fade-up">
              Your hair has grown {`${hairGrowth}`} feet! Since you were born.
            </p>
          ) : null}
        </div>

        {/* <div>
          {horoscope ? (
            <p data-aos="fade-up">
            Here is a reading: {`${horoscope}`}</p>
            ) : null}
          </div> */}
      </section>
    </>
  );
}
