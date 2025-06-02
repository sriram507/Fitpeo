import React from 'react';
import styles from './ActivityFeed.module.css';

const activityData = {
  totalAppointments: 3,
  weeklyData: [
    { day: 'Mon', pattern: [50, 40, 30, 40, 50] },
    { day: 'Tue', pattern: [30, 50, 40, 30, 45] },
    { day: 'Wed', pattern: [40, 30, 50, 50, 35] },
    { day: 'Thu', pattern: [35, 40, 45, 20, 40] },
    { day: 'Fri', pattern: [25, 45, 30, 35, 30] },
    { day: 'Sat', pattern: [20, 30, 25, 40, 25] },
    { day: 'Sun', pattern: [45, 35, 40, 30, 50] }
  ]
};

function ActivityFeed() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Activity</h3>
        <div className={styles.appointmentCount}>
          {activityData.totalAppointments} Appointments this week
        </div>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.barsContainer}>
          {activityData.weeklyData.map((item, index) => (
            <div key={index} className={styles.barGroup}>
              <div className={styles.lineGroup}>
                {item.pattern.map((height, i) => {
                  const isTuesday09 = item.day === 'Tue' && i === 1;
                  return (
                    <div
                      key={i}
                      className={`${styles.line} ${styles[`line${i + 1}`]} ${
                        isTuesday09 ? styles.highlightBar : ''
                      }`}
                      style={{ height: `${height}px` }}
                    >
                      {i === 1 && (
                        <>
                          <div
                            className={styles.top}
                            style={{ height: `${height / 2}px` }}
                          ></div>
                          <div
                            className={styles.bottom}
                            style={{ height: `${height / 2}px` }}
                          ></div>
                        </>
                      )}
                      {i === 3 && (
                        <>
                          <div style={{ height: `${height * 0.4}px` }}></div>
                          <div style={{ height: `${height * 0.4}px` }}></div>
                        </>
                      )}
                    </div>
                  );
                })}
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