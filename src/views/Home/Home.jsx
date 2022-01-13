// import React from 'react'

// export default function Home() {
//     return (
//         <div>
//             <h1>Home view</h1>
//         </div>
//     )
// }


import { Link, Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';


export default function Home() {
  const auth = useUser();//make a call to BE for useUser
  if (auth.user.email) return <Redirect to="/main" />;

  return (
    <section>
      <h1>Welcome to the notebook!</h1>
      <p>
        Please <Link to="/login">sign in</Link>.
      </p>
    </section>
  );
}