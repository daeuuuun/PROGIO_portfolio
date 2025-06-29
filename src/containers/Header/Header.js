import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/img/Prugio_bI.png" alt="Prugio Logo" className={styles.logo} />
    </header>
  );
};

export default Header;