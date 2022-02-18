import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Styles from './Main.css';
import Aos from 'aos';
import { getHolidays, getMainData } from '../../utils/Utils.jsx';
import tas from '../../assets/tas-removebg-preview.png';
import dreamingPic from '../../assets/dreamPic.png';
import longHair from '../../assets/longHair.png';
import sleepy from '../../assets/sleepy.png';
import born from '../../assets/born.png';

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
  const [numDays, setNumDays] = useState('');
  const [loading, setLoading] = useState('false');

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

    ticker();
    setShow(false);
    setLoading(true);
    setHoliday(await getHolidays(date));
    const allObjectsData = await getMainData(date);

    const totalNumDays = allObjectsData.totalNumOfDays;
    setNumDays(totalNumDays);

    const breathTotal = allObjectsData.newTotalBreaths;
    setBreathsState(breathTotal);

    const finalHeartBeats = allObjectsData.totalHeartBeats;
    setHeartBeats(finalHeartBeats);

    const finalYearsAsleep = allObjectsData.totalYearsAsleep;
    setYearsAsleep(finalYearsAsleep);

    const finalBlinks = allObjectsData.totalBlinks;
    setBlinks(finalBlinks);

    const finalDreamDays = allObjectsData.totalDreamDays;
    setDreamDays(finalDreamDays);

    const finalExtinctRate = allObjectsData.totalExtinct;
    setGlobalExtinction(finalExtinctRate);

    const finalHairGrowth = allObjectsData.totalHairGrowth;
    setHairGrowth(finalHairGrowth);
    if (finalHairGrowth !== null) {
      setTimeout(() => setLoading(false), 3000);
    }
  };

  return (
    <>
      {show && (
        <div className={Styles.formSubmit}>
          <form onSubmit={handleSubmit} className="Main">
            <label htmlFor="start">Enter your Birthday </label>
            <input
              id="start"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
            <button aria-label="button" type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
      )}
      {!show && loading && (
        <section data-aos="fade-in" className={Styles.loading}>
          <img
            className={Styles.icon}
            src="https://freesvg.org/img/1539121879.png"
          />
          Loading...
        </section>
      )}
      {!loading && (
        <section data-aos="fade-in" className={Styles.infoSection}>
          <div>
            {numDays ? (
              <>
                {<img src={born} className={Styles.born}></img>}
                <p aria-label="holiday" data-aos="fade-up">
                  A lot has happened in the {`${numDays.toLocaleString()}`} days
                  since you were born.
                </p>
              </>
            ) : null}
          </div>

          <div>
            {numDays ? (
              <p aria-label="holiday" data-aos="fade-up">
                Since you were born...
              </p>
            ) : null}
          </div>

          <div className={Styles.divWrapper}>
            {breathsState ? (
              <>
                <section className={Styles.breathbox}>
                  <div>
                    <div className={Styles.breathface}>
                      <div className={Styles.eye} />
                      <div className={Styles.eye} />
                    </div>
                    <div className={Styles.breathbottomface}>
                      <div className={Styles.mouth} />
                    </div>
                  </div>
                </section>

                <p data-aos="fade-left">
                  You've taken {`${breathsState.toLocaleString()}`} breaths!
                </p>
              </>
            ) : null}
          </div>

          <div>
            {heartBeats ? (
              <>
                <div className={Styles.heart}></div>
                <p data-aos="fade-right">
                  You're heart has beaten {`${heartBeats.toLocaleString()}`}{' '}
                  times!
                </p>
              </>
            ) : null}
          </div>

          <div>
            {blinks ? (
              <>
                <div className={Styles.blinks}>
                  <div className={Styles.face}>
                    <div className={Styles.eye} />
                    <div className={Styles.eye} />
                  </div>
                </div>
                <p data-aos="fade-up">
                  You have blinked {`${blinks.toLocaleString()}`} times!
                </p>
              </>
            ) : null}
          </div>

          <div>
            {yearsAsleep ? (
              <>
                {<img src={sleepy} className={Styles.asleep}></img>}
                <p data-aos="fade-up">
                  {`${yearsAsleep}`} years of your life has been spent asleep!
                </p>
              </>
            ) : null}
          </div>

          <div>
            {dreamDays ? (
              <>
                {<img src={dreamingPic} className={Styles.dream}></img>}
                <p data-aos="fade-up">
                  {`${dreamDays.toLocaleString()}`} days of your life has been
                  spent just dreaming!
                </p>
              </>
            ) : null}
          </div>

          <div>
            {globalExtinction ? (
              <>
                {<img src={tas} className={Styles.extinct}></img>}
                <p data-aos="fade-up">
                  Some estimated up to {`${globalExtinction.toLocaleString()}`}{' '}
                  species of animal life have since gone extinct..
                </p>
              </>
            ) : null}
          </div>

          <div>
            {hairGrowth ? (
              <>
                {<img src={longHair} className={Styles.hair}></img>}
                <p data-aos="fade-up">
                  Your hair has grown a grand total of {`${hairGrowth}`} feet
                  since you were born!
                </p>
              </>
            ) : null}
          </div>

          <div>
            {holiday ? (
              <p aria-label="holiday" data-aos="fade-up">
                Did you know {`${holiday}`} lands on your birthday!?
              </p>
            ) : null}
          </div>

          <div>
            {numDays ? (
              <p aria-label="holiday" data-aos="fade-up">
                .. A lot has happened since you were born, and you still have a
                long way to go.
              </p>
            ) : null}
          </div>

          <div>
            {numDays ? (
              <p aria-label="holiday" data-aos="fade-up">
                Who else knows what else will happen in your lifetime!
              </p>
            ) : null}
          </div>

          <div>
            {numDays ? (
              <p aria-label="holiday" data-aos="fade-up">
                Thanks for playing Life Stats with us :)
              </p>
            ) : null}
          </div>
        </section>
      )}
    </>
  );
}
