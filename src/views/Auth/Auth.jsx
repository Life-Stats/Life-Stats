import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import UserForm from '../../components/UserForm/UserForm';
import { useUser } from '../../context/UserContext';
// import { signInUser, signUpUser } from '../../services/users';
import { getSignInUser } from '../../utils/utils';
import Styles from './Auth.css'
// cal fetch utils function to gain access to user data from back end response

export default function Auth({ isSigningIn = false }) {
  const history = useHistory();
  const { setUser } = useUser();

  const handleSubmit = async () => {
    try {
      //services need to put in BE and make call to talk to Supabase
      // if they are signing up
        const user = await getSignInUser();
        setUser(user);
        console.log('user', user);
        // location.replace('https://uptupfmuuwpcbmudkedl.supabase.co/auth/v1/authorize?provider=google')
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
    <div>
    <section className={StyleSheet.authSect}>
      <h2 className={Styles.authWelcome}>Welcome!</h2>
    </section>
<div className={Styles.btnDiv}>
    <button className={Styles.authBtn} onClick={handleSubmit}>
  <section className={Styles.btnSect}>
    <div className={Styles.imgDiv}>
    <img  className={Styles.googleBtn} src='https://freesvg.org/img/1534129544.png' />
    </div>
    <p className={Styles.btnP}>Sign in with Google</p>
    </section>
    </button>
</div>
</div>
    </>
  );
}
