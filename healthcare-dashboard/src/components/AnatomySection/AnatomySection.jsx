// src/components/AnatomySection/AnatomySection.jsx
import React from 'react';
import { FaHeart, FaLungs, FaTooth, FaBone } from 'react-icons/fa';
import anatomyImage from '../../assets/images/anatomy.svg .jpg';
import styles from './AnatomySection.module.css';

// Notice the mixed icon libraries (Font Awesome instead of Feather)
function AnatomySection() {
  // Inline styles mixed with CSS modules
  const indicatorStyle = {
    '--healthy-color': '#4CAF50',
    '--warning-color': '#FFC107',
    '--critical-color': '#F44336'
  };

  return (
    <div className={styles.container} style={{ position: 'relative' }}>
      <div className={styles.header}>
        <h3 className={styles.title}>Body Status</h3>
        <span className={styles.subtitle}>Last checkup: Oct 12, 2021</span>
      </div>

      {/* Human would use a div wrapper for easier positioning */}
      <div className={styles.anatomyWrapper}>
        <img 
          src={anatomyImage} 
          alt="Human body anatomy" 
          className={styles.anatomyImage}
          // Random width/height that might need adjustment
          width={180}
          height={320}
        />

        {/* Indicators positioned absolutely - values are eyeballed */}
        <div 
          className={`${styles.indicator} ${styles.heartIndicator}`}
          style={indicatorStyle}
        >
          <FaHeart className={styles.indicatorIcon} />
          <span className={styles.indicatorText}>Healthy Heart</span>
          <div className={`${styles.statusDot} ${styles.healthy}`} />
        </div>

        <div 
          className={`${styles.indicator} ${styles.lungsIndicator}`}
          style={indicatorStyle}
        >
          <FaLungs className={styles.indicatorIcon} />
          <span className={styles.indicatorText}>Lungs</span>
          <div className={`${styles.statusDot} ${styles.critical}`} />
        </div>

        {/* Missing tooth indicator - added later as an afterthought */}
        <div 
          className={`${styles.indicator} ${styles.toothIndicator}`}
          style={{ ...indicatorStyle, left: '55%' }} // Override position
        >
          <FaTooth className={styles.indicatorIcon} />
          <span className={styles.indicatorText}>Teeth</span>
          <div className={`${styles.statusDot} ${styles.warning}`} />
        </div>

        {/* Bone indicator with manual adjustment */}
        <div 
          className={`${styles.indicator} ${styles.boneIndicator}`}
          style={indicatorStyle}
        >
          <FaBone className={styles.indicatorIcon} style={{ transform: 'rotate(30deg)' }} />
          <span className={styles.indicatorText}>Bone</span>
          <div className={`${styles.statusDot} ${styles.healthy}`} />
        </div>
      </div>
    </div>
  );
}

export default AnatomySection;