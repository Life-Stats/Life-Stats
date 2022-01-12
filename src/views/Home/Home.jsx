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
  const auth = useUser();
  if (auth.user.email) return <Redirect to="/notes" />;

  return (
    <section className={styles.home}>
      <h1>Welcome to the notebook!</h1>
      <p>
        Please <Link to="/login">sign in</Link> to see your notes.
      </p>
      <img src={journal} alt="notebook image" />
    </section>
  );
}