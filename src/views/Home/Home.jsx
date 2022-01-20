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
      
    } else {
      window.location.href = 'http://localhost:7891/login';
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