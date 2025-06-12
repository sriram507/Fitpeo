import React from "react";
import styles from "./HealthStatusCards.module.css";

function HealthStatusCards() {
  const healthData = [
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
      barClass: styles.orangeBar,
      progress: 95,
    },
  ];

  return (
    <section className={styles.wrapper} aria-label="Health Status Summary">
      <div className={styles.cardsContainer}>
        {healthData.map((item) => (
          <article
            key={item.id}
            className={`${styles.card} ${styles[item.status]}`}
            aria-label={`${item.title} health status: ${item.status}`}
          >
            <header className={styles.cardHeader}>
              <span className={styles.icon} role="img" aria-label={item.title}>
                {item.icon}
              </span>
              <h4 className={styles.title}>{item.title}</h4>
            </header>

            <time className={styles.date} dateTime={item.date}>
              {item.date}
            </time>

            <div
              className={styles.progressBar}
              role="progressbar"
              aria-valuenow={item.progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className={`${styles.progressFill} ${item.barClass}`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HealthStatusCards;
