import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { signOutUser } from '../../services/users'
import Styles  from './Header.css'

export default function Header() {
    const history = useHistory();


    function handleClick() {
        signOutUser()
        history.push('/')
    }

    return (
        <>
        <header className={Styles.header}>
        <section className={Styles.titleSection}>
        <section className={Styles.imgSection}>
        <img className={Styles.image}src='https://freesvg.org/img/1539121879.png' />
      </section>
    
        </section>
        <div className={Styles.signinTitle}>
            <nav className={Styles.nav}>
                <label className={Styles.logo}>Life Stats</label>
                <ul>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>About Us</a></li>
                    <li><a href='' onClick={handleClick}>Sign out</a></li>
                </ul>


            </nav>
            <section className={Styles.aboutSect}>
            <button onClick={handleClick}>Sign Out</button>

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
