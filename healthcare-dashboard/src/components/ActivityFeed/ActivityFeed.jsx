import React from 'react';
import styles from './ActivityFeed.module.css';

// Weekly activity data with bar patterns for each day
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
    <section className={styles.container} aria-label="Weekly Activity Chart">
      <header className={styles.header}>
        <h3 className={styles.title}>Activity</h3>
        <span className={styles.summary}>
          {activityData.totalAppointments} Appointments this week
        </span>
      </header>

      <div className={styles.chart}>
        {activityData.weeklyData.map((day, index) => (
          <div key={index} className={styles.dayGroup}>
            <div className={styles.bars}>
              {day.pattern.map((height, i) => {
                const isHighlighted = day.day === 'Tue' && i === 1;
                const isSplitBar = i === 1 || i === 3;

                return (
                  <div
                    key={i}
                    className={`${styles.bar} ${styles[`bar${i + 1}`]} ${isHighlighted ? styles.highlight : ''}`}
                    style={{ height: `${height}px` }}
                  >
                    {i === 1 && (
                      <>
                        <div className={styles.segmentTop} style={{ height: `${height / 2}px` }} />
                        <div className={styles.segmentBottom} style={{ height: `${height / 2}px` }} />
                      </>
                    )}

                    {i === 3 && (
                      <>
                        <div
                          style={{
                            height: `${height * 0.4}px`,
                            backgroundColor: '#b6b09f',
                            width: '100%',
                            borderRadius: '2px'
                          }}
                        />
                        <div
                          style={{
                            height: `${height * 0.4}px`,
                            backgroundColor: '#b6b09f',
                            width: '100%',
                            borderRadius: '2px'
                          }}
                        />
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            <div className={styles.dayLabel}>{day.day}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivityFeed;
