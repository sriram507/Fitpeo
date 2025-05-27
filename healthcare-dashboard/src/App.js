import React from "react";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import AnatomySection from "./components/AnatomySection/AnatomySection";
import HealthStatusCards from "./components/HealthStatusCards/HealthStatusCards";
import CalendarView from "./components/CalendarView/CalendarView";
import UpcomingSchedule from "./components/UpcomingSchedule/UpcomingSchedule";
import ActivityFeed from "./components/ActivityFeed/ActivityFeed";

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.mainLayout}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        <div className={styles.contentArea}>
          {/* Middle section: Anatomy + Health Cards + Calendar */}
          <div className={styles.middleRow}>
            <div className={styles.anatomyWrapper}>
              <AnatomySection />
              <HealthStatusCards />
            </div>
            <div className={styles.calendarWrapper}>
              {" "}
              {/* Neutral outer wrapper */}
              <div className={styles.parentWrapper}>
                {" "}
                {/* This div controls right alignment */}
                <CalendarView />
              </div>
            </div>
          </div>

          {/* Right column stack: Schedule & Activity */}
          <div className={styles.bottomRow}>
            <div className={styles.rightSections}>
              <UpcomingSchedule />
              <ActivityFeed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
