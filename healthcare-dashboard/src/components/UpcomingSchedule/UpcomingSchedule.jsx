import React from 'react';
import {
  FiCheckCircle,
  FiEye,
  FiHeart,
  FiActivity
} from 'react-icons/fi';

import styles from './UpcomingSchedule.module.css';

// Static data for demo purposes
const scheduleData = [
  {
    day: 'Thursday',
    date: 'October 21, 2021',
    appointments: [
      {
        id: 1,
        time: '09:00 AM',
        title: 'Health checkup complete',
        icon: <FiCheckCircle color="#4CAF50" />,
        completed: true
      },
      {
        id: 2,
        time: '11:30 AM',
        title: 'Ophthalmologist',
        icon: <FiEye color="#2196F3" />,
        completed: false
      }
    ]
  },
  {
    day: 'Saturday',
    date: 'October 23, 2021',
    appointments: [
      {
        id: 3,
        time: '10:15 AM',
        title: 'Cardiologist',
        icon: <FiHeart color="#F44336" />,
        completed: false
      },
      {
        id: 4,
        time: '02:00 PM',
        title: 'Neurologist',
        icon: <FiActivity color="#673AB7" />,
        completed: false
      }
    ]
  }
];

function UpcomingSchedule() {
  return (
    <section className={styles.container} aria-label="Upcoming Appointments">
      <header className={styles.header}>
        <h3 className={styles.title}>The Upcoming Schedule</h3>
        <a href="#" className={styles.viewAllLink} onClick={e => e.preventDefault()}>
          View All
        </a>
      </header>

      <div className={styles.daysWrapper}>
        {scheduleData.map((dayBlock) => (
          <div key={dayBlock.day} className={styles.daySection}>
            <div className={styles.dayHeader}>
              <span className={styles.dayName}>On {dayBlock.day}</span>
              <span className={styles.dayDate}>{dayBlock.date}</span>
            </div>

            <div className={styles.appointmentScroll}>
              {dayBlock.appointments.map(appt => (
                <div
                  key={appt.id}
                  className={`${styles.card} ${appt.completed ? styles.completed : ''}`}
                >
                  <div className={styles.icon}>{appt.icon}</div>
                  <div className={styles.info}>
                    <h4 className={styles.titleText}>{appt.title}</h4>
                    <p className={styles.timeText}>{appt.time}</p>
                  </div>
                  {appt.completed && (
                    <div className={styles.checkmark}>✓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingSchedule;
