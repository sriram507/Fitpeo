// src/components/AnatomySection/AnatomySection.jsx
import React from 'react';
import { FaHeart, FaBone, FaBell } from 'react-icons/fa';
import anatomyImage from '../../assets/images/Anatomy.jpg';
import styles from './AnatomySection.module.css';

function AnatomySection() {
  return (
    <div className={styles.wrapper}>
      {/* Search + Notification */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchBar}
        />
        <FaBell className={styles.notificationIcon} />
      </div>

      {/* Dashboard Title */}
      <h3 className={styles.pageTitle}>Dashboard</h3>

      {/* Main Anatomy Image with Indicators */}
      <div className={styles.container}>
        <img
          src={anatomyImage}
          alt="Human body anatomy"
          className={styles.anatomyImage}
        />

        {/* Heart Indicator */}
        <div className={`${styles.indicator} ${styles.heart}`}>
          <FaHeart className={styles.icon} />
          <span className={styles.label}>Heart</span>
          <div className={`${styles.dot} ${styles.healthy}`} />
        </div>

        {/* Right Knee Indicator */}
        <div className={`${styles.indicator} ${styles.knee}`}>
          <FaBone className={styles.icon} />
          <span className={styles.label}>Right Knee</span>
          <div className={`${styles.dot} ${styles.warning}`} />
        </div>
      </div>
    </div>
  );
}

export default AnatomySection;
