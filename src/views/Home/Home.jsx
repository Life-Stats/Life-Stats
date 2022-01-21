import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import Styles from './Home.css';
import { getUser } from '../../services/users';

export default function Home() {
  const { user, setUser } = useUser();
  const history = useHistory();
  const location = useLocation();
  const { login } = location.state || { login: { pathname: '/login' } };
  const currentUser = getUser();

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

      {currentUser ? (
        <div className={Styles.div}>
          <section className={Styles.section}>
            <p className={Styles.desc}>
              Your reflective and informational journey awaits!
            </p>
            <div className={Styles.btnDiv}>
              <button onClick={handlePlay} className={Styles.signin}>
                PLAY
              </button>
            </div>
          </section>
        </div>
      ) : (
        <div className={Styles.div}>
          <section className={Styles.section}>
            <p className={Styles.desc}>
              Welcome! <br /> We invite you to sign in below before you enjoy
              the experience.
            </p>
            <div className={Styles.btnDiv}>
              <button onClick={handlePlay} className={Styles.signin}>
                Please sign in.
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
