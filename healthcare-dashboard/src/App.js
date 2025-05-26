import React from "react";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardOverview from "./components/DashboardOverview/DashboardOverview";
import AnatomySection from "./components/AnatomySection/AnatomySection";
import HealthStatusCards from "./components/HealthStatusCards/HealthStatusCards";

function App() {
  return (
    <div className={styles.app}>
      {/* Header placed here instead of in layout for "reasons" */}
      <Header />

      <div className={styles.mainLayout}>
        <Sidebar />
        

      {/* Main content area - using multiple divs for "layout control" */}
        <div className={styles.contentArea}>
          {/* Top row */}
          <div className={styles.topRow}>
            <DashboardOverview />
          </div>



        {/* Middle row - anatomy section with status cards */}
          <div className={styles.middleRow}>
            <div className={styles.anatomyWrapper}>
              <AnatomySection />
            </div>


      <div className={styles.statusCardsWrapper}>
              <HealthStatusCards />
            </div>
          </div>

    </div>
    </div>
    </div>
  );
}

export default App;
