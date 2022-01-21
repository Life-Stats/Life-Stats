import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import Styles from './Home.css';
import { getUser } from '../../services/users';

export default function Home() {
  const { user, setUser } = useUser();
  const history = useHistory();
  const location = useLocation();
  const { login } = location.state || { login: { pathname: '/login' } };

  const handlePlay = (e) => {
    e.preventDefault();
    history.replace(login.pathname);
    if (!user.id) {
      const currentUser = getUser();
      if (!currentUser) return;
      setUser({ id: currentUser.id, email: currentUser.email });
      history.replace('/main');
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
            <button onClick={handlePlay} className={Styles.signin}>
              PLAY
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
