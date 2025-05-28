import React from 'react';
import styles from './ActivityFeed.module.css';

// Static data
const activityData = {
  totalAppointments: 3,
  weeklyData: [
    { day: 'Mon', value: 1, height: '25%' },
    { day: 'Tue', value: 0, height: '5%' }, 
    { day: 'Wed', value: 2, height: '50%' },
    { day: 'Thu', value: 1, height: '25%' },
    { day: 'Fri', value: 3, height: '75%' },
    { day: 'Sat', value: 0, height: '5%' },
    { day: 'Sun', value: 1, height: '25%' }
  ]
};

function ActivityFeed() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Activity</h3>
        <div className={styles.appointmentCount}>
          {activityData.totalAppointments} appointments this week
        </div>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.chartGrid}>
          <div className={styles.yAxis}>
            <span>3</span>
            <span>2</span>
            <span>1</span>
            <span>0</span>
          </div>

          <div className={styles.barsContainer}>
            {activityData.weeklyData.map((item, index) => (
              <div key={index} className={styles.barGroup}>
                <div className={styles.highlightLineWrapper}>
                  <div className={styles.solidLine} style={{ backgroundColor: '#1E90FF' }} />
                  <div className={styles.splitLine}>
                    <div style={{ backgroundColor: '#1E90FF' }} />
                    <div style={{ backgroundColor: '#00BFFF' }} />
                  </div>
                  <div className={styles.solidLine} style={{ backgroundColor: '#ccc' }} />
                </div>

                <div
                  className={styles.bar}
                  style={{ height: item.height }}
                >
                  <div className={styles.barValue}>{item.value}</div>
                </div>
                <div className={styles.dayLabel}>{item.day}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{ background: '#2a86ff' }} />
            <span>Appointments</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{ background: '#1E90FF' }} />
            <span>Primary</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{ background: '#00BFFF' }} />
            <span>Secondary</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;
