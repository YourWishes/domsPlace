import React from 'react';
import styles from './HeaderButton.module.scss';

const HeaderButton:React.FC<{
  children:React.ReactNode;
}> = ({ children }) => {
  return (
    <button className={styles.HeaderButton}>
      {children}
    </button>
  );
}

export default HeaderButton;