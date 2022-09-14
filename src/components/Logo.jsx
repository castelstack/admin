import React from 'react';
import logo from 'assets/logo.png'
import { Link } from 'react-router-dom';
import styles from 'styles/components/logo.module.scss';

const Logo = () => {
    return (
        <Link to='/' className={styles.logo}>
          <img src={logo} alt="logo" className={styles.logo}/>
        </Link>
    );
};

export default Logo;