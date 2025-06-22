import React from 'react';
//import styles from '../Header/Header.module.css';
import PRUGIO_Logo from './Prugio_bI.png';

const Header = () => {
  return (
    <>
      <div>
        <div>
          <img src={PRUGIO_Logo} alt="로고"></img>
        </div>
      </div>
    </>
  )
}

export default Header;