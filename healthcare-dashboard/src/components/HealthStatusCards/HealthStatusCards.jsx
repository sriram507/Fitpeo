import React from "react";
import styles from "./HealthStatusCards.module.css";

function HealthStatusCards() {
  const cards = [
    {
      id: 1,
      title: "Lungs",
      date: "Oct 20, 2021",
      status: "critical",
      icon: "🫁",
      barClass: styles.redBar,
    },
    {
      id: 2,
      title: "Teeth",
      date: "Nov 5, 2021",
      status: "warning",
      icon: "🦷",
      barClass: styles.skyBlueBar,
    },
    {
      id: 3,
      title: "Bone",
      date: "Oct 15, 2021",
      status: "healthy",
      icon: "🦴",
      barClass: styles.blueBar,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${styles.card} ${styles[card.status]}`}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>{card.icon}</span>
              <h4 className={styles.cardTitle}>{card.title}</h4>
            </div>
            <div className={styles.cardDate}>{card.date}</div>

            {/* Horizontal Progress Bar */}
            <div className={styles.progressBar}>
              <div
                className={`${styles.progressFill} ${card.barClass}`}
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthStatusCards;
