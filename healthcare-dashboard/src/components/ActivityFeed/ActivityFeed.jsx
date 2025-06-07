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
    { day: 'Sun', pattern: [45, 35, 40, 30, 50] },
  ],
};

function ActivityFeed() {
  return (
    <section className={styles.container} aria-label="Weekly Activity Chart">
      <div className={styles.header}>
        <h3 className={styles.title}>Activity</h3>
        <span className={styles.appointmentCount}>
          {activityData.totalAppointments} Appointments this week
        </span>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.barsContainer}>
          {activityData.weeklyData.map((item, dayIndex) => (
            <div key={dayIndex} className={styles.barGroup}>
              <div className={styles.lineGroup}>
                {item.pattern.map((height, lineIndex) => {
                  const isSpecialLine = item.day === 'Tue' && lineIndex === 1;

                  return (
                    <div
                      key={lineIndex}
                      className={`${styles.line} ${styles[`line${lineIndex + 1}`]} ${
                        isSpecialLine ? styles.highlightBar : ''
                      }`}
                      style={{ height: `${height}px` }}
                    >
                      {lineIndex === 1 && (
                        <>
                          <div
                            className={styles.top}
                            style={{ height: `${height / 2}px` }}
                          />
                          <div
                            className={styles.bottom}
                            style={{ height: `${height / 2}px` }}
                          />
                        </>
                      )}
                      {lineIndex === 3 && (
                        <>
                          <div
                            style={{
                              height: `${height * 0.4}px`,
                            }}
                          />
                          <div
                            style={{
                              height: `${height * 0.4}px`,
                            }}
                          />
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
    </section>
  );
}

export default ActivityFeed;
