import { Link, Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import Styles from './Home.css'

export default function Home() {
  const auth = useUser();//make a call to BE for useUser
  if (auth.user.email) return <Redirect to="/main" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(auth) {
      window.location.href = 'http://localhost:7891/main'
      // change to pademendic pastures/main, etc when ready to fully deploy
      // make sure to change utils route call to heroku too !!!!!!!
      
    } else {
      window.location.href = 'http://localhost:7891/login';
      // change to pademendic pastures/login, etc when ready to fully deploy
      // make sure to change utils route call to heroku too!!!!!!!!!!
    }
  }

  return (
    <>
    <div className={Styles.titleDiv}>
       <h1 className={Styles.title}>Life Stats</h1>
       </div>
    <div className={Styles.div}>
      <section className={Styles.section}>
      <p className={Styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
      <div className={Styles.btnDiv}>
      <button onClick={handleSubmit} className={Styles.signin}>PLAY</button>
      </div>
      </section>
    </div>
    </>
  );
}