import React from 'react'
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import { signOutUser } from '../../services/users'
import Styles  from './Header.css'

export default function Header() {
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from: {pathname: '/'}}

    const handleSubmit = (e) => {
        e.preventDefault();
        signOutUser()
        history.replace(from.pathname)
        // history.push('/');
    };

    return (
        <>
        <header className={Styles.header}>
        <section className={Styles.titleSection}>
        <section className={Styles.imgSection}>
        <img className={Styles.image}src='https://freesvg.org/img/1539121879.png' />
      </section>
    
        </section>
        <div className={Styles.signinTitle}>
            <section className={Styles.aboutSect}>
            <button onClick={handleSubmit}>Sign Out</button>

            </section>
            <section className={Styles.signSect}>

            
            </section>
        </div>
        <div className={Styles.signinTitle}>
            <section className={Styles.aboutSect}>
                <Link to='/about'>About Us</Link>

            </section>
            <section className={Styles.signSect}>

            
            </section>
        </div>
        </header>
        </>
    )
}
