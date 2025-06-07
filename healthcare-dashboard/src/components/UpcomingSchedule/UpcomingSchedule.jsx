import React from 'react';
import { 
  FiCheckCircle, 
  FiEye, 
  FiHeart, 
  FiActivity 
} from 'react-icons/fi';
import styles from './UpcomingSchedule.module.css';

const appointmentsByDay = [
  {
    day: 'Thursday',
    date: 'October 21, 2021',
    appointments: [
      {
        id: 1,
        title: 'Health checkup complete',
        time: '09:00 AM',
        icon: <FiCheckCircle color="#4CAF50" />,
        completed: true
      },
      {
        id: 2,
        title: 'Ophthalmologist',
        time: '11:30 AM',
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
        title: 'Cardiologist',
        time: '10:15 AM',
        icon: <FiHeart color="#F44336" />,
        completed: false
      },
      {
        id: 4,
        title: 'Neurologist',
        time: '02:00 PM',
        icon: <FiActivity color="#673AB7" />,
        completed: false
      }
    ]
  }
];

function UpcomingSchedule() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>The Upcoming Schedule</h3>
        <a href="#" className={styles.viewAll} onClick={(e) => e.preventDefault()}>
          View All
        </a>
      </div>

      <div className={styles.schedule}>
        {appointmentsByDay.map((dayGroup) => (
          <div key={dayGroup.day} className={styles.dayGroup}>
            <div className={styles.dayHeader}>
              <span className={styles.dayName}>On {dayGroup.day}</span>
              <span className={styles.dayDate}>{dayGroup.date}</span>
            </div>

            <div className={styles.appointmentsList}>
              {dayGroup.appointments.map((appointment) => (
                <div 
                  key={appointment.id}
                  className={`${styles.appointmentCard} ${
                    appointment.completed ? styles.completed : ''
                  }`}
                >
                  <div className={styles.appointmentIcon}>
                    {appointment.icon}
                  </div>
                  <div className={styles.appointmentDetails}>
                    <h4 className={styles.appointmentTitle}>
                      {appointment.title}
                    </h4>
                    <p className={styles.appointmentTime}>
                      {appointment.time}
                    </p>
                  </div>
                  {appointment.completed && (
                    <div className={styles.completedBadge}>✓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingSchedule;
