import React from 'react'
import { Link } from 'react-router-dom'
import Styles  from './Header.css'

export default function Header() {
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
                <Link to='/about'>About Us</Link>

            </section>
            <section className={Styles.signSect}>

            
            </section>
        </div>
        </header>
        </>
    )
}
