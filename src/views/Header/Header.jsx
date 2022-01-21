import React from 'react';
import { useHistory } from 'react-router-dom';
import { signOutUser } from '../../services/users';
import Styles from './Header.css';
import { slide as Menu } from 'react-burger-menu';
import stylesHeader from './HeaderStyles';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { setUser } = useUser();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    signOutUser();
    setUser({});
    history.replace('/');
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
