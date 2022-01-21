import React from 'react';
import { Link } from 'react-router-dom';
import Simon from '../../../public/profilePics/simon.jpeg';
import Millie from '../../../public/profilePics/Millie.jpg';
import Dylan from '../../../public/profilePics/Dylan.jpg';
import Peter from '../../../public/profilePics/Peter.jpeg';
import Styles from './AboutUs.css';

export default function AboutUs() {
  return (
    <div>
      <div className={Styles.aboutHeader}>
        <h1>Meet The Team</h1>
      </div>

      <section className={Styles.section}>
        <div className={Styles.left}>
          <img src={Simon} />
          <p className={Styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
            repellendus praesentium. Quam nobis, non aperiam sint aut possimus
            dolorem, beatae, cum vel sunt saepe ad nostrum eius expedita eum
            nulla!
          </p>
        </div>

        <div className={Styles.right}>
          <p className={Styles.text}>
            Hello! I am a software engineer located in Portland OR. an
            interesting fact about me is that I am left handed, but I can use
            both fairly well.
          </p>
          <img src={Millie} />
        </div>

        <div className={Styles.left}>
          <img src={Peter} />
          <p className={Styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
            repellendus praesentium. Quam nobis, non aperiam sint aut possimus
            dolorem, beatae, cum vel sunt saepe ad nostrum eius expedita eum
            nulla!
          </p>
        </div>

        <div className={Styles.right}>
          <p className={Styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
            repellendus praesentium. Quam nobis, non aperiam sint aut possimus
            dolorem, beatae, cum vel sunt saepe ad nostrum eius expedita eum
            nulla!
          </p>
          <img src={Dylan} />
        </div>
      </section>
    </div>
  );
}
