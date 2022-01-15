import { Link, Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import Styles from './Home.css'

export default function Home() {
  const auth = useUser();//make a call to BE for useUser
  if (auth.user.email) return <Redirect to="/main" />;

  return (
    <>
    <section className={Styles.titleSection}>
      <h1 className={Styles.title}>Life Stats </h1>
      </section>
      <section className={Styles.imgSection}>
        <img className={Styles.image}src='https://freesvg.org/img/1539121879.png' />
      </section>
    <div className={Styles.div}>
      <section className={Styles.section}>
      <p className={Styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
      <h2>
        Please <Link to="/login">sign in</Link>.
      </h2>
      </section>
    </div>
    </>
  );
}