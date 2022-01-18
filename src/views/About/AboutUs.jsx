import React from 'react';
import { Link } from 'react-router-dom';
import Simon from '../../../public/profilePics/simon.jpeg';
import Millie from '../../../public/profilePics/Millie.jpg';
import Styles from './AboutUs.css';

export default function AboutUs() {
  return (
    <div>
      <p>
        {/* Make routes to main, home, signout buttons */}
        Go back <Link to="/"> Home</Link>{' '}
      </p>
      <h1>About Us view</h1>
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
            repellendus praesentium. Quam nobis, non aperiam sint aut possimus
            dolorem, beatae, cum vel sunt saepe ad nostrum eius expedita eum
            nulla!
          </p>
          <img src={Millie} />
        </div>
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
            repellendus praesentium. Quam nobis, non aperiam sint aut possimus
            dolorem, beatae, cum vel sunt saepe ad nostrum eius expedita eum
            nulla!
          </p>
          <img src={Simon} />
        </div>
      </section>
    </div>
  );
}
