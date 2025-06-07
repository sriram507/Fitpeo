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

const navItems = [
  { id: 1, name: "Dashboard", icon: <FiHome /> },
  { id: 2, name: "History", icon: <FiClock /> },
  { id: 3, name: "Calendar", icon: <FiCalendar /> },
  { id: 4, name: "Appointments", icon: <FiClipboard /> },
  { id: 5, name: "Statistics", icon: <FiPieChart /> },
  { id: 6, name: "Tests", icon: <FiActivity /> },
  { id: 7, name: "Chat", icon: <FiMessageSquare /> },
  { id: 8, name: "Support", icon: <FiHelpCircle /> },
];

const settingItem = { id: 9, name: "Setting", icon: <FiSettings /> };

function NavItem({ item, isActive, onClick }) {
  return (
    <li>
      <a
        href="#"
        className={`${styles.navLink} ${isActive ? styles.active : ""}`}
        onClick={(e) => {
          e.preventDefault();
          onClick?.(item.id);
        }}
        aria-label={item.name}
      >
        <span className={styles.navIcon}>{item.icon}</span>
        <span className={styles.linkText}>{item.name}</span>
        {isActive && <div className={styles.activeIndicator} />}
      </a>
    </li>
  );
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(1);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className={styles.menuToggle} onClick={toggleSidebar} aria-label="Toggle Menu">
        {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
      </div>

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`} role="navigation">
        <div className={styles.sidebarHeader}>
          <h2 className={styles.healthcareTitle}>
            <span className={styles.health}>Health</span>
            <span className={styles.care}>care.</span>
          </h2>
          <h3 className={styles.sidebarTitle}>General</h3>
        </div>

        <nav className={styles.navListWrapper}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                isActive={item.id === activeId}
                onClick={setActiveId}
              />
            ))}
          </ul>

          <ul className={styles.navList}>
            <NavItem item={settingItem} isActive={activeId === settingItem.id} onClick={setActiveId} />
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
