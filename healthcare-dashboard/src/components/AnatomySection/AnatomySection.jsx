import React from 'react';
import { FaHeart, FaBone } from 'react-icons/fa';
import anatomyImage from '../../assets/images/Anatomy.jpg';
import styles from './AnatomySection.module.css';

function AnatomySection() {
  return (
    <section className={styles.wrapper} aria-label="Anatomy Dashboard">
      {/* Page Title */}
      <h3 className={styles.pageTitle}>Dashboard</h3>

      {/* Main Anatomy Image */}
      <div className={styles.container}>
        <img
          src={anatomyImage}
          alt="Illustration of human body anatomy"
          className={styles.anatomyImage}
        />

        {/* Heart Indicator */}
        <div className={`${styles.indicator} ${styles.heart}`} role="region" aria-label="Heart Indicator">
          <FaHeart className={styles.icon} aria-hidden="true" />
          <span className={styles.label}>Healthy Heart</span>
          <span className={`${styles.dot} ${styles.healthy}`} title="Healthy" />
        </div>

        {/* Leg Indicator */}
        <div className={`${styles.indicator} ${styles.leg}`} role="region" aria-label="Leg Indicator">
          <FaBone className={styles.icon} aria-hidden="true" />
          <span className={styles.label}>Healthy Leg</span>
          <span className={`${styles.dot} ${styles.warning}`} title="Warning" />
        </div>
      </div>
    </section>
  );
}

export default AnatomySection;
