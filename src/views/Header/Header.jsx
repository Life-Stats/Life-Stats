import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { signOutUser } from '../../services/users';
import Styles from './Header.css';
import { slide as Menu } from 'react-burger-menu';
import stylesHeader from './HeaderStyles';

export default function Header() {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const handleSubmit = (e) => {
    e.preventDefault();
    signOutUser();
    history.replace(from.pathname);
    // history.push('/');
  };

  return (
    <>
      <Menu right width={'25%'} styles={stylesHeader}>
        <a id="home" href="/">
          Home
        </a>
        <a id="about" href="/about">
          About Us
        </a>
        <a id="signOut" href="/" onClick={handleSubmit}>
          Sign out
        </a>
      </Menu>
      <header className={Styles.header}>
        <section className={Styles.titleSection}>
          <section className={Styles.imgSection}>
            <img
              className={Styles.image}
              src="https://freesvg.org/img/1539121879.png"
            />
          </section>
        </section>
      </header>
    </>
  );
}
