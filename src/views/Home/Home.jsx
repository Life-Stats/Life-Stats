import { Link, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import Styles from './Home.css';

export default function Home() {
  const auth = useUser(); //make a call to BE for useUser
  const [user, setUser] = useState('');
  setUser(auth);
  if (auth.user.email){
    return <Redirect to="/main" />;
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth) {
      window.location.href = 'https://pedantic-pasteur-453987.netlify.app/main';
    } else {
      window.location.href =
        'https://pedantic-pasteur-453987.netlify.app/login';
    }
  };

  return (
    <>
      <div className={Styles.titleDiv}>
        <h1 className={Styles.title}>Life Stats</h1>
      </div>
      <div className={Styles.div}>
        <section className={Styles.section}>
          <p className={Styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>

          <div className={Styles.btnDiv}>
            {user ? (
              <button onClick={handleSubmit} className={Styles.signin}>
                PLAY
              </button>
            ) : (
              <button onClick={handleSubmit} className={Styles.signin}>
                SIGN IN
              </button>
            )}
          </div>

          <div className={Styles.btnDiv}>
            <button onClick={handleSubmit} className={Styles.signin}>
              SIGN IN
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
