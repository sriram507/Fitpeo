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
  FiX,
} from "react-icons/fi";
import styles from "./Sidebar.module.css";

const NAV_ITEMS = [
  { id: 1, name: "Dashboard", icon: <FiHome /> },
  { id: 2, name: "History", icon: <FiClock /> },
  { id: 3, name: "Calendar", icon: <FiCalendar /> },
  { id: 4, name: "Appointments", icon: <FiClipboard /> },
  { id: 5, name: "Statistics", icon: <FiPieChart /> },
  { id: 6, name: "Tests", icon: <FiActivity /> },
  { id: 7, name: "Chat", icon: <FiMessageSquare /> },
  { id: 8, name: "Support", icon: <FiHelpCircle /> },
];

const SETTINGS_ITEM = { id: 9, name: "Settings", icon: <FiSettings /> };

function NavItem({ item, isActive, onClick }) {
  return (
    <li>
      <div
        className={`${styles.navLink} ${isActive ? styles.active : ""}`}
        onClick={() => onClick?.(item.id)}
        aria-label={item.name}
        role="button"
        tabIndex={0}
      >
        <span className={styles.icon}>{item.icon}</span>
        <span className={styles.text}>{item.name}</span>
        {isActive && <div className={styles.activeIndicator} />}
      </div>
    </li>
  );
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(1);

  return (
    <>
      <div
        className={styles.menuToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
      </div>

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
        role="navigation"
      >
        <div className={styles.header}>
          <h2 className={styles.logo}>
            <span className={styles.health}>Health</span>
            <span className={styles.care}>care.</span>
          </h2>
          <h3 className={styles.sectionLabel}>General</h3>
        </div>

        <nav className={styles.navWrapper}>
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                isActive={activeId === item.id}
                onClick={setActiveId}
              />
            ))}
          </ul>

          <ul className={styles.navList}>
            <NavItem
              item={SETTINGS_ITEM}
              isActive={activeId === SETTINGS_ITEM.id}
              onClick={setActiveId}
            />
          </ul>
        </nav>

        <footer className={styles.footer}>
          <p>© Healthcare {new Date().getFullYear()}</p>
        </footer>
      </aside>
    </>
  );
}

export default Sidebar;
