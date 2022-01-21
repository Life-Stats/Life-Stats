import { useUser } from '../../context/UserContext';
import { signInUser, signInUserGitHub } from '../../services/users';
import Styles from './Auth.css';

export default function Auth({ isSigningIn = false }) {
  const { setUser } = useUser();

  const handleSubmit = async () => {
    try {
      const user = await signInUser();
      setUser(user);
    } catch (error) {
      throw error;
    }
  };

  const handleSubmitGitHub = async () => {
    try {
      const user = await signInUserGitHub();
      setUser(user);
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div className={Styles.btnDiv}>
      
        <section className={Styles.authSect}>
          <h2 className={Styles.authWelcome}>Welcome!</h2>
          <p>Please sign in with Google or GitHub!</p>
        </section>

        <button className={Styles.authBtn} onClick={handleSubmit}>
          <section className={Styles.btnSect}>
            <div className={Styles.imgDiv}>
              <img
                className={Styles.googleBtn}
                src="https://freesvg.org/img/1534129544.png"
              />
            </div>
            <p className={Styles.btnP}>Sign in with Google</p>
          </section>
        </button>

        <button className={Styles.authBtn} onClick={handleSubmitGitHub}>
          <section className={Styles.btnSect}>
            <div className={Styles.imgDiv}>
              <img
                className={Styles.googleBtn}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Github-circle_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Github-circle_%28CoreUI_Icons_v1.0.0%29.svg.png"
              />
            </div>
            <p className={Styles.btnP}>Sign in with GitHub</p>
          </section>
        </button>

      </div>
    </>
  );
}
