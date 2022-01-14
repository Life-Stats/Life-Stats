import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import UserForm from '../../components/UserForm/UserForm';
import { useUser } from '../../context/UserContext';
// import { signInUser, signUpUser } from '../../services/users';
import { getSignInUser } from '../../utils/utils';
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
    } catch (error) {
      throw error;
    }
  };

  return (
    <section>
      <h2>Welcome!</h2>

    <button onClick={handleSubmit}>CLICK HERE PLEASE sign in with google, it cool</button>
    </section>
  );
}
