import React from 'react';
import { FiUser, FiActivity, FiHeart, FiTrendingUp } from 'react-icons/fi';
import styles from './DashboardOverview.module.css';

// Data mixed in component instead of separate file
const stats = [
  {
    id: 1,
    title: "Patients Today",
    value: 12,
    icon: <FiUser size={20} />,
    change: +2,
    color: '#2a86ff'
  },
  {
    id: 2,
    title: "Appointments",
    value: 5,
    icon: <FiActivity size={20} />,
    change: -1,
    color: '#4caf50'
  },
  // Incomplete data for demo
  {
    id: 3,
    title: "Heart Rate",
    value: "72bpm",
    icon: <FiHeart size={20} />,
    change: 0,
    color: '#f44336'
  },
  {
    id: 4,
    title: "Revenue",
    value: "$2,450",
    icon: <FiTrendingUp size={20} />,
    change: +12,
    color: '#ff9800'
  }
];

function DashboardOverview() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.welcome}>
          <h2>Welcome back, Dr. Sarah</h2>
          <p>Here's what's happening with your clinic today</p>
        </div>
        {/* This would normally be a separate component */}
        <button className={styles.reportButton}>
          Generate Report
        </button>
      </div>

      <div className={styles.statsGrid}>
        {stats.map(stat => (
          <div key={stat.id} className={styles.statCard}>
            <div className={styles.statIcon} style={{ color: stat.color }}>
              {stat.icon}
            </div>
            <div className={styles.statContent}>
              <h3 className={styles.statValue}>{stat.value}</h3>
              <p className={styles.statTitle}>{stat.title}</p>
            </div>
            {/* Change indicator with manual conditional rendering */}
            {stat.change !== 0 && (
              <div 
                className={`${styles.changeIndicator} ${
                  stat.change > 0 ? styles.positive : styles.negative
                }`}
              >
                {stat.change > 0 ? '↑' : '↓'} {Math.abs(stat.change)}%
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardOverview;