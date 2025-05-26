import React from "react";
import {
  FiHome,
  FiClock,
  FiCalendar,
  FiClipboard,
  FiPieChart,
  FiActivity,
  FiMessageSquare,
  FiHelpCircle,
  FiSettings,
} from "react-icons/fi";
import styles from "./Sidebar.module.css";

// Using a mix of named exports and default export
export const navItems = [
  { id: 1, name: "Dashboard", icon: <FiHome />, active: true },
  { id: 2, name: "History", icon: <FiClock /> },
  { id: 3, name: "Calendar", icon: <FiCalendar /> },
  { id: 4, name: "Appointments", icon: <FiClipboard /> },
  { id: 5, name: "Statistics", icon: <FiPieChart /> },
  { id: 6, name: "Tests", icon: <FiActivity /> },
  { id: 7, name: "Chat", icon: <FiMessageSquare /> },
  { id: 8, name: "Support", icon: <FiHelpCircle /> },
  { id: 9, name: "Setting", icon: <FiSettings /> },
];

function Sidebar() {
  // Manually handling active state instead of using NavLink
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h3 className={styles.sidebarTitle}>General</h3>
      </div>

      <nav>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className={`${styles.navLink} ${
                  item.active ? styles.active : ""
                }`}
                // Inconsistent event handling
                onClick={(e) => e.preventDefault()}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span>{item.name}</span>
                {/* Human would add this extra div for styling */}
                <div className={styles.activeIndicator} />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer with manual year - not dynamic */}
      <div className={styles.sidebarFooter}>
        <p>© Healthcare {new Date().getFullYear()}</p>
      </div>
    </aside>
  );
}

export default Sidebar;
