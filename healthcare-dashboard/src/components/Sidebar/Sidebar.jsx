import React, { useState } from "react";
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
  FiMenu,
  FiX
} from "react-icons/fi";
import styles from "./Sidebar.module.css";

const navItems = [
  { id: 1, name: "Dashboard", icon: <FiHome />, active: true },
  { id: 2, name: "History", icon: <FiClock /> },
  { id: 3, name: "Calendar", icon: <FiCalendar /> },
  { id: 4, name: "Appointments", icon: <FiClipboard /> },
  { id: 5, name: "Statistics", icon: <FiPieChart /> },
  { id: 6, name: "Tests", icon: <FiActivity /> },
  { id: 7, name: "Chat", icon: <FiMessageSquare /> },
  { id: 8, name: "Support", icon: <FiHelpCircle /> }
];

const settingItem = { id: 9, name: "Setting", icon: <FiSettings /> };

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={styles.menuToggle} onClick={toggleSidebar}>
        {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
      </div>

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.healthcareTitle}>
            <span className={styles.health}>Health</span>
            <span className={styles.care}>care</span>
          </h2>
          <h3 className={styles.sidebarTitle}>General</h3>
        </div>

        <nav className={styles.navListWrapper}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className={`${styles.navLink} ${item.active ? styles.active : ""}`}
                  onClick={(e) => e.preventDefault()}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
                  <span className={styles.linkText}>{item.name}</span>
                  <div className={styles.activeIndicator} />
                </a>
              </li>
            ))}
          </ul>

          <ul className={styles.navList}>
            <li>
              <a href="#" className={styles.navLink} onClick={(e) => e.preventDefault()}>
                <span className={styles.navIcon}>{settingItem.icon}</span>
                <span className={styles.linkText}>{settingItem.name}</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.sidebarFooter}>
          <p>© Healthcare {new Date().getFullYear()}</p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
