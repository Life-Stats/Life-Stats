import React from 'react';
import Simon from '../../../public/profilePics/simon.jpeg';
import Millie from '../../../public/profilePics/Millie.jpg';
import Dylan from '../../../public/profilePics/Dylan.jpg';
import Peter from '../../../public/profilePics/Peter.jpeg';
import Styles from './AboutUs.css';
import GitHub from '../../assets/ghlogo.png';
import LinkedIn from '../../assets/linkedIn.png';

export default function AboutUs() {
  return (
    <div>
      <div className={Styles.aboutHeader}>
        <h1>Meet The Team</h1>
      </div>

      <section className={Styles.section}>
        <div className={Styles.left}>
          <p className={Styles.name}>Simon Kaine</p>
          <img src={Simon} />
          <p className={Styles.text}>
            Hi! I am a Full Stack Software Engineer currently living in
            Milwaukie, Oregon. Born on May 31st 1988 when the number one song in
            the US that week was 'One More Try' by George Michael.
          </p>
          <div className={Styles.linkList}>
            <a href="https://www.linkedin.com/in/simonbishopkaine/">
              <img className={Styles.linkedIn} src={LinkedIn} />
            </a>

            <a href="https://github.com/simonkaine">
              <img className={Styles.gitHub} src={GitHub} />
            </a>
          </div>
        </div>

        <div className={Styles.right}>
          <p className={Styles.name}>Aemilius Morgan</p>
          <img src={Millie} />
          <p className={Styles.text}>
            Hello! I am a software engineer located in Portland OR. an
            interesting fact about me is that I am left handed, but I can use
            both fairly well.
          </p>
          <div className={Styles.linkList}>
            <a href="https://www.linkedin.com/in/aemilius-morgan/">
              <img className={Styles.linkedIn} src={LinkedIn} />
            </a>

            <a href="https://github.com/AemiliusM">
              <img className={Styles.gitHub} src={GitHub} />
            </a>
          </div>
        </div>

        <div className={Styles.left}>
          <p className={Styles.name}>Peter Montano</p>
          <img src={Peter} />
          <p className={Styles.text}>
            Full Stack Software Developer currently living in Portland, Oregon.
            Born on August 12th 1998, the year of the tiger.
          </p>
          <div className={Styles.linkList}>
            <a href="https://www.linkedin.com/in/petermontano/">
              <img className={Styles.linkedIn} src={LinkedIn} />
            </a>

            <a href="https://github.com/Montano-Pete">
              <img className={Styles.gitHub} src={GitHub} />
            </a>
          </div>
        </div>

        <div className={Styles.right}>
          <p className={Styles.name}>Dylan Greathouse</p>
          <img src={Dylan} />
          <p className={Styles.text}>
            Developing a passion for front and back end web development. Love
            any opportunity to design and create. Always looking for a chance to
            learn and be a better version of myself than I was the day before.
            Strong interest in game design and cooking.
          </p>
          <div className={Styles.linkList}>
            <a href="https://www.linkedin.com/in/dylan-greathouse/">
              <img className={Styles.linkedIn} src={LinkedIn} />
            </a>

            <a href="https://github.com/Dylan-Greathouse">
              <img className={Styles.gitHub} src={GitHub} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
