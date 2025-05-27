import React from 'react';
import styles from './HealthStatusCards.module.css';

function HealthStatusCards() {
  const cards = [
    { 
      id: 1, 
      title: 'Lungs', 
      date: 'Oct 20, 2021', 
      status: 'critical',
      icon: '🫁'
    },
    { 
      id: 2, 
      title: 'Teeth', 
      date: 'Nov 5, 2021', 
      status: 'warning',
      icon: '🦷'
    },
    { 
      id: 3, 
      title: 'Bone', 
      date: 'Oct 15, 2021', 
      status: 'healthy',
      icon: '🦴'
    }
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {cards.map(card => (
          <div key={card.id} className={`${styles.card} ${styles[card.status]}`}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>{card.icon}</span>
              <h4 className={styles.cardTitle}>{card.title}</h4>
            </div>
            <div className={styles.cardDate}>{card.date}</div>
            <div className={styles.cardStatus}>
              {card.status === 'healthy' && 'All good'}
              {card.status === 'warning' && 'Needs checkup'}
              {card.status === 'critical' && 'Requires attention'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthStatusCards;
