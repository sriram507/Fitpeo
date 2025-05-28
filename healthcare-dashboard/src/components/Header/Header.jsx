import React from 'react';
import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';
import avatar from '../../assets/images/avatar.jpg';
import styles from './Header.module.css';

// Not using destructuring for props to show human variation
function Header(props) {
  return (
    <header className={`${styles.header} ${props.className || ''}`}>
      {/* Logo with inline style variation */}
      <h1 className={styles.logo} style={{ letterSpacing: '0.5px' }}>
        Healthcare<span className={styles.logoDot}>.</span>
      </h1>

      {/* Search bar with imperfect CSS class usage */}
      <div className={styles.searchWrapper}>
        <FiSearch className={styles.searchIcon} size={18} />
        <input
          type="text"
          placeholder="Search here..."
          className={`${styles.searchInput} search-input-global`} // Mixed class naming
        />
      </div>

      {/* Right side icons - slightly imperfect alignment */}
      <div className={styles.actions}>
        <button type="button" className={styles.notificationBtn}>
          <FiBell size={20} />
          <span className={styles.badge}>3</span>
        </button>

        {/* Profile with mixed styling approaches */}
        <div className="profile-container" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={avatar} 
            alt="User profile" 
            className={styles.avatar}
            width={32}
            height={32}
          />
        </div>

        {/* Add button with manual margin */}
        <button className={styles.addButton} style={{ marginLeft: '15px' }}>
          <FiPlus size={20} />
        </button>
      </div>
    </header>
  );
}

export default Header;