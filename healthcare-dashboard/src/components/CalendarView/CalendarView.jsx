import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { FaUserMd, FaTooth } from 'react-icons/fa';
import { GiRunningShoe } from 'react-icons/gi';
import styles from './CalendarView.module.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const dates = [25, 26, 27, 28, 29, 30, 31];

const schedule = [
  ['10:00', '08:00', '12:00', '10:00', '-', '12:00', '09:00'],
  ['11:00', '09:00', '-', '11:00', '14:00', '14:00', '10:00'],
  ['12:00', '10:00', '13:00', '-', '16:00', '15:00', '11:00'],
];

function CalendarView() {
  return (
    <section className={styles.container} aria-label="October Schedule Overview">
      <header className={styles.header}>
        <h3 className={styles.title}>October 2021</h3>
        <div className={styles.icons}>
          <FaUserMd className={styles.icon} aria-label="Doctor" />
          <FiPlus className={`${styles.icon} ${styles.addIcon}`} aria-label="Add" />
        </div>
      </header>

      <div className={styles.calendarGrid}>
        {days.map((day, i) => (
          <div key={day} className={styles.dayHeader}>
            <div>{day}</div>
            <div className={styles.dateNumber}>{dates[i]}</div>
          </div>
        ))}

        {schedule.map((row, rowIndex) =>
          row.map((time, colIndex) => {
            const isSpecialHighlight =
              (time === '11:00' && rowIndex === 1 && colIndex === 3) || // Thu 11:00
              (time === '12:00' && rowIndex === 0 && colIndex === 5) || // Sat 12:00
              (time === '09:00' && rowIndex === 0 && colIndex === 6);   // Sun 09:00

            const isTuesdayNineAM = rowIndex === 1 && colIndex === 1 && time === '09:00';

            const classNames = [
              styles.timeSlot,
              isSpecialHighlight && styles.specialHighlight,
              isTuesdayNineAM && styles.deepHighlight,
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <div key={`${rowIndex}-${colIndex}`} className={classNames}>
                {time}
              </div>
            );
          })
        )}
      </div>

      <div className={styles.appointmentCards}>
        <div className={`${styles.appointmentCard} ${styles.highlightedCard}`}>
          <div className={styles.cardHeader}>
            <div className={styles.cardColorLine} style={{ backgroundColor: '#2196F3' }} />
            <h4 className={styles.cardTitle}>
              <FaTooth className={styles.cardIcon} />
              Dentist
            </h4>
          </div>
          <p className={styles.cardTime}>09:00 - 10:00 AM</p>
          <p className={styles.cardDoctor}>Dr. Smith</p>
        </div>

        <div className={`${styles.appointmentCard} ${styles.secondaryCard}`}>
          <div className={styles.cardHeader}>
            <div className={styles.cardColorLine} style={{ backgroundColor: '#2196F3' }} />
            <h4 className={styles.cardTitle}>
              <GiRunningShoe className={styles.cardIcon} />
              Physiotherapy Appointment
            </h4>
          </div>
          <p className={styles.cardTime}>11:00 - 12:00 PM</p>
          <p className={styles.cardDoctor}>Dr. Johnson</p>
        </div>
      </div>
    </section>
  );
}

export default CalendarView;
