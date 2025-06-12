import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import AnatomySection from "./components/AnatomySection/AnatomySection";
import ActivityFeed from "./components/ActivityFeed/ActivityFeed";
import HealthStatusCards from "./components/HealthStatusCards/HealthStatusCards";
import CalendarView from "./components/CalendarView/CalendarView";
import UpcomingSchedule from "./components/UpcomingSchedule/UpcomingSchedule";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>

      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <div className={styles.layout}>
            {/* Left side: TopBar, Anatomy, Health, Activity */}
            <section className={styles.leftPane}>
              <div className={styles.topBar}>
                <TopBar />
              </div>

              <div className={styles.leftContent}>
                <div className={styles.healthSection}>
                  <div className={styles.anatomy}>
                    <AnatomySection />
                  </div>
                  <div className={styles.healthCards}>
                    <HealthStatusCards />
                  </div>
                </div>

                <div className={styles.activity}>
                  <ActivityFeed />
                </div>
              </div>
            </section>

            {/* Right side: Calendar and Schedule */}
            <aside className={styles.rightPane}>
              <div className={styles.calendar}>
                <CalendarView />
              </div>
              <div className={styles.schedule}>
                <UpcomingSchedule />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
