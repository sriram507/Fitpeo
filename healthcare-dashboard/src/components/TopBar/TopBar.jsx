import React from 'react';
import { FaBell } from 'react-icons/fa';
import styles from './TopBar.module.css';

function TopBar() {
  return (
    <header className={styles.topBar}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.searchBar}
        aria-label="Search input"
      />
      <button className={styles.notificationIconWrapper} aria-label="Notifications">
        <FaBell className={styles.notificationIcon} />
      </button>
    </header>
  );
}

export default TopBar;
