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
      progress: 80,
    },
    {
      id: 2,
      title: "Teeth",
      date: "Nov 5, 2021",
      status: "warning",
      icon: "🦷",
      barClass: styles.skyBlueBar,
      progress: 60,
    },
    {
      id: 3,
      title: "Bone",
      date: "Oct 15, 2021",
      status: "healthy",
      icon: "🦴",
      barClass: styles.blueBar,
      progress: 95,
    },
  ];

  return (
    <section className={styles.wrapper} aria-label="Health Status Cards">
      <h4 className={styles.title}>Health Status</h4>
      <div className={styles.container}>
        {cards.map((card) => (
          <article
            key={card.id}
            className={`${styles.card} ${styles[card.status]}`}
            aria-label={`${card.title} status: ${card.status}`}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon} role="img" aria-label={card.title}>
                {card.icon}
              </span>
              <h5 className={styles.cardTitle}>{card.title}</h5>
            </div>
            <div className={styles.cardDate}>{card.date}</div>

            {/* Progress Bar */}
            <div className={styles.progressBar} role="progressbar" aria-valuenow={card.progress} aria-valuemin="0" aria-valuemax="100">
              <div
                className={`${styles.progressFill} ${card.barClass}`}
                style={{ width: `${card.progress}%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HealthStatusCards;
