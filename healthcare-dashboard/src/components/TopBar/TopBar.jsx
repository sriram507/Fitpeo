import React from 'react';
import { FaBell } from 'react-icons/fa';
import styles from './TopBar.module.css';

function TopBar() {
  return (
    <div className={styles.topBar}>
      <input
        type="text"
        placeholder="Search  "
        className={styles.searchBar}
      />
      <div className={styles.notificationIconWrapper}>
        <FaBell className={styles.notificationIcon} />
      </div>
    </div>
  );
}

export default TopBar;