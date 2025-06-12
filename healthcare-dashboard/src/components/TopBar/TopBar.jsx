import React from 'react';
import { FaBell } from 'react-icons/fa';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <header className={styles.topBar}>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Search..."
        aria-label="Search"
      />
      <button className={styles.notificationButton} aria-label="Notifications">
        <FaBell className={styles.icon} />
      </button>
    </header>
  );
};

export default TopBar;
