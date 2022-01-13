import { Link, Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';


export default function Home() {
  const auth = useUser();//make a call to BE for useUser
  if (auth.user.email) return <Redirect to="/main" />;

  return (
    <section>
      <h1>Welcome to Life Stats.... </h1>
      <p>Description of app goes here..</p> 
      <p>
        Please <Link to="/login">sign in</Link>.
      </p>
    </section>
  );
}