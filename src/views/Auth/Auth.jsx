import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import { useUser } from '../../context/UserContext';
// import { signInUser, signUpUser } from '../../services/users';
import { getSignUpUser, getSignInUser } from '../../utils/utils';
// cal fetch utils function to gain access to user data from back end response

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();

  const handleSubmit = async (email, password) => {
    try {
      if (!email || password.length < 6)
        throw new Error(
          'An email and password (with 6+ characters) are required.'
        );
      //services need to put in BE and make call to talk to Supabase
      // if they are signing up
      if (isSigningUp) {
        const user = await getSignUpUser({ email, password });
        setUser(user);
        history.push('/confirm');
      } else {
        const user = await getSignInUser({ email, password });
        setUser(user);
        console.log('user', user);
        history.push('/main');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <section>
      <h2>{isSigningUp ? 'Welcome!' : 'Welcome back!'}</h2>
      <br />

      <UserForm
        onSubmit={handleSubmit}
        label={isSigningUp ? 'Sign Up' : 'Sign In'}
      />

      {isSigningUp ? (
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      ) : (
        <p>
          Need an account? <Link to="/signup">Sign Up</Link>
        </p>
      )}
    </section>
  );
}
