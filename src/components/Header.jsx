import React from 'react';
import styles from 'styles/components/header.module.scss';
import Anchor from './Anchor';
import Logo from './Logo';
import Search from './Search';
import avatar from 'assets/logo.png'

const Header = () => {
  return (
    <header className={styles.header}>
        <main className={styles.main}>

      <Logo />
      <Search />
      <HeaderLinks />
        </main>
    </header>
  );
};

export default Header;

const HeaderLinks = () => {
  return (
    <div className={styles.links}>
      <Anchor to={'/support'} className={styles.anchor}>
        Support
      </Anchor>
      <Anchor to={'/support'} className={styles.anchor}>
        FAQ
      </Anchor>
      <Anchor to={'/support'} className={styles.anchor}>
        Not
      </Anchor>
      <AvatarName name="Henry" avatar={avatar}/>
    </div>
  );
};

const AvatarName = ({ name, avatar }) => {
  return (
    <main className={styles.avatar}>
      <div className={styles.avatar_info}>
        <p>Hello</p>
        <h5>{name ?? 'Name'}</h5>
      </div>
      <img src={avatar} alt={name} className={styles.avatar_image}/>
    </main>
  );
};
