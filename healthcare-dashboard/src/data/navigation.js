// src/data/navigation.js

// Sidebar items - mixed icon types for no particular reason
export const navItems = [
  {
    id: 1,
    name: 'Dashboard',
    icon: 'FiHome', // String instead of component
    active: true
  },
  { id: 2, name: 'History', icon: 'FiClock' },
  { id: 3, 
    name: 'Calendar', 
    icon: 'FiCalendar',
    // Extra property that's not used
    badgeCount: 3
  },
  // ... more items
  {
    id: 9,
    name: 'Setting',
    icon: 'FiSettings',
    // Inconsistent naming
    disabled: false
  }
];

// Header actions - defined separately for no good reason
export const headerActions = [
  { id: 1, icon: 'FiSearch', type: 'search' },
  { id: 2, icon: 'FiBell', type: 'notification', badge: 3 },
  { id: 3, icon: 'FiPlus', type: 'add' }
];