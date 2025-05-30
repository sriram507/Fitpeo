import React from 'react';
import { FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi';
import { FaUserMd } from 'react-icons/fa';
import styles from './CalendarView.module.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const dates = [25, 26, 27, 28, 29, 30, 31];

const schedule = [
  ['10:00', '08:00', '12:00', '10:00', '-',     '12:00', '09:00'],
  ['11:00', '09:00', '-',      '11:00', '14:00', '14:00', '10:00'],
  ['12:00', '10:00', '13:00',  '-',     '16:00', '15:00', '11:00'],
];

function CalendarView() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>October 2021</h3>
        <div className={styles.icons}>
          <FaUserMd className={styles.icon} />
          <FiPlus className={styles.icon} />
        </div>
      </div>

      <div className={styles.calendarGrid}>
        {days.map((day, i) => (
          <div key={day} className={`${styles.dayHeader} ${i === 1 ? styles.highlightedDay : ''}`}>
            <div>{day}</div>
            <div className={styles.dateNumber}>{dates[i]}</div>
          </div>
        ))}

        {schedule.map((row, rowIndex) =>
          row.map((time, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`${styles.timeSlot} ${colIndex === 1 ? styles.highlightedCell : ''}`}
            >
              {time}
            </div>
          ))
        )}
      </div>

      <div className={styles.appointmentCards}>
        <div className={`${styles.appointmentCard} ${styles.highlightedCard}`}>
          <div className={styles.cardHeader}>
            <div className={styles.cardColorLine} style={{ backgroundColor: '#2196F3' }} />
            <h4 className={styles.cardTitle}>Dentist</h4>
          </div>
          <p className={styles.cardTime}>09:00 - 10:00 AM</p>
          <p className={styles.cardDoctor}>Dr. Smith</p>
        </div>

        <div className={styles.appointmentCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardColorLine} style={{ backgroundColor: '#2196F3' }} />
            <h4 className={styles.cardTitle}>Physiotherapy Appointment</h4>
          </div>
          <p className={styles.cardTime}>11:00 - 12:00 PM</p>
          <p className={styles.cardDoctor}>Dr. Johnson</p>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
