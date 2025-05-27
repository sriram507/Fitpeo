import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './CalendarView.module.css';

// Hardcoded month data instead of using a date library
const currentMonth = {
  name: 'October 2021',
  days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  dates: [
    null, null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ]
};

// Appointment data mixed in the component file
const appointments = {
  12: ['09:00', '13:00'],
  15: ['11:00'],
  20: ['15:00']
};

function CalendarView() {
  // Manually chunk dates into weeks instead of using a utility function
  const weeks = [];
  let week = [];
  
  currentMonth.dates.forEach((date, index) => {
    week.push(date);
    if (week.length === 7 || index === currentMonth.dates.length - 1) {
      weeks.push(week);
      week = [];
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Calendar</h3>
        <div className={styles.monthNavigation}>
          <button className={styles.navButton}>
            <FiChevronLeft size={18} />
          </button>
          <span className={styles.monthName}>{currentMonth.name}</span>
          <button className={styles.navButton}>
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className={styles.calendarGrid}>
        {/* Day headers */}
        {currentMonth.days.map(day => (
          <div key={day} className={styles.dayHeader}>
            {day}
          </div>
        ))}

        {/* Calendar cells */}
        {weeks.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((date, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`${styles.dateCell} ${date === null ? styles.empty : ''}`}
              >
                {date && (
                  <>
                    <div className={styles.dateNumber}>{date}</div>
                    {/* Appointment dots - positioned manually */}
                    <div className={styles.appointmentMarkers}>
                      {appointments[date]?.map((time, i) => (
                        <div
                          key={i}
                          className={styles.appointmentDot}
                          style={{ 
                            backgroundColor: 
                              time === '09:00' ? '#4CAF50' :
                              time === '11:00' ? '#2196F3' :
                              time === '13:00' ? '#FF9800' :
                              '#F44336'
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      {/* Appointment cards - hardcoded */}
      <div className={styles.appointmentCards}>
        <div className={styles.appointmentCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardColorLine} style={{ backgroundColor: '#4CAF50' }} />
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
