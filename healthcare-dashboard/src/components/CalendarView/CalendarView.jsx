import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { FaUserMd, FaTooth } from 'react-icons/fa';
import { GiRunningShoe } from 'react-icons/gi';
import styles from './CalendarView.module.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const dates = [25, 26, 27, 28, 29, 30, 31];

// Appointment slots for the week (rows = time levels, columns = days)
const timeSlots = [
  ['10:00', '08:00', '12:00', '10:00', '-', '12:00', '09:00'],
  ['11:00', '09:00', '-', '11:00', '14:00', '14:00', '10:00'],
  ['12:00', '10:00', '13:00', '-', '16:00', '15:00', '11:00'],
];

function CalendarView() {
  return (
    <section className={styles.container} aria-label="Weekly Appointment Calendar">

      {/* Top header with title and icons */}
      <header className={styles.header}>
        <h3 className={styles.title}>October 2021</h3>
        <div className={styles.icons}>
          <FaUserMd className={styles.icon} aria-label="Doctor Icon" />
          <FiPlus className={`${styles.icon} ${styles.addIcon}`} aria-label="Add Icon" />
        </div>
      </header>

      {/* Calendar structure */}
      <div className={styles.calendarGrid}>
        {days.map((day, index) => (
          <div key={day} className={styles.dayHeader}>
            <div>{day}</div>
            <div className={styles.dateNumber}>{dates[index]}</div>
          </div>
        ))}

        {timeSlots.map((row, rowIdx) =>
          row.map((time, colIdx) => {
            const isSpecial =
              (time === '11:00' && rowIdx === 1 && colIdx === 3) || // Thu 11:00
              (time === '12:00' && rowIdx === 0 && colIdx === 5) || // Sat 12:00
              (time === '09:00' && rowIdx === 0 && colIdx === 6);   // Sun 09:00

            const isTuesdayNine =
              rowIdx === 1 && colIdx === 1 && time === '09:00'; // Tue 09:00

            const slotClasses = [
              styles.timeSlot,
              isSpecial && styles.specialHighlight,
              isTuesdayNine && styles.deepHighlight,
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <div key={`${rowIdx}-${colIdx}`} className={slotClasses}>
                {time}
              </div>
            );
          })
        )}
      </div>

      {/* Appointment cards section */}
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
              Physiotherapy
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
