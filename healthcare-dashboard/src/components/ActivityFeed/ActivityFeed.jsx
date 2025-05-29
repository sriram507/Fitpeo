import React from 'react';
import styles from './ActivityFeed.module.css';

const activityData = {
  totalAppointments: 3,
  weeklyData: [
    { day: 'Mon' },
    { day: 'Tue' },
    { day: 'Wed' },
    { day: 'Thu' },
    { day: 'Fri' },
    { day: 'Sat' },
    { day: 'Sun' }
  ]
};

function ActivityFeed() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Activity</h3>
        <div className={styles.appointmentCount}>
          3 Appointments this week
        </div>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.barsContainer}>
          {activityData.weeklyData.map((item, index) => (
            <div key={index} className={styles.barGroup}>
              <div className={styles.lineGroup}>
                {/* Line 1 - Full gray */}
                <div className={`${styles.line} ${styles.line1}`} />

                {/* Line 2 - Two-color split */}
                <div className={`${styles.line} ${styles.line2}`}>
                  <div className={styles.top}></div>
                  <div className={styles.bottom}></div>
                </div>

                {/* Line 3 - Solid blue */}
                <div className={`${styles.line} ${styles.line3}`} />

                {/* Line 4 - Gray with gap */}
                <div className={`${styles.line} ${styles.line4}`}>
                  <div></div>
                  <div></div>
                </div>

                {/* Line 5 - Solid blue */}
                <div className={`${styles.line} ${styles.line5}`} />
              </div>

              <div className={styles.dayLabel}>{item.day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;
