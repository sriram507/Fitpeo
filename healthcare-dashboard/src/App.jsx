import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import AnatomySection from "./components/AnatomySection/AnatomySection";
import ActivityFeed from "./components/ActivityFeed/ActivityFeed";
import HealthStatusCards from "./components/HealthStatusCards/HealthStatusCards";
import CalendarView from "./components/CalendarView/CalendarView";
import UpcomingSchedule from "./components/UpcomingSchedule/UpcomingSchedule";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      {/* This wrapper includes border around both sidebar and content */}
      <div className={styles.layoutWrapper}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        <div className={styles.contentArea}>
          <div className={styles.pageWrapper}>
            <div className={styles.middleRow}>
              <div className={styles.leftColumn}>
                <TopBar />
                <div className={styles.anatomyAndHealth}>
                  <div className={styles.anatomySection}>
                    <AnatomySection />
                  </div>
                  <div className={styles.healthCards}>
                    <HealthStatusCards />
                  </div>
                </div>
                <div className={styles.activityFeed}>
                  <ActivityFeed />
                </div>
              </div>

              <div className={styles.rightColumn}>
                <div className={styles.calendarView}>
                  <CalendarView />
                </div>
                <div className={styles.upcomingSchedule}>
                  <UpcomingSchedule />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;