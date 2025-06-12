import React from 'react';
import { FaHeart, FaBone } from 'react-icons/fa';
import anatomyImage from '../../assets/images/Anatomy.jpg';
import styles from './AnatomySection.module.css';

function AnatomySection() {
  return (
    <section className={styles.wrapper} aria-label="Anatomy Overview Section">
      {/* Section Heading */}
      <h2 className={styles.heading}>Dashboard</h2>

      <div className={styles.imageContainer}>
        {/* Main Anatomy Image */}
        <img
          src={anatomyImage}
          alt="Diagram of human body anatomy"
          className={styles.anatomyImage}
        />

        {/* Heart Status Badge */}
        <div className={`${styles.statusBadge} ${styles.heart}`} aria-label="Heart Status: Healthy">
          <FaHeart className={styles.icon} />
          <span className={styles.label}>Healthy Heart</span>
          <span className={`${styles.dot} ${styles.healthy}`} title="Healthy" />
        </div>

        {/* Leg Status Badge */}
        <div className={`${styles.statusBadge} ${styles.leg}`} aria-label="Leg Status: Warning">
          <FaBone className={styles.icon} />
          <span className={styles.label}>Healthy Leg</span>
          <span className={`${styles.dot} ${styles.warning}`} title="Needs Attention" />
        </div>
      </div>
    </section>
  );
}

export default AnatomySection;
