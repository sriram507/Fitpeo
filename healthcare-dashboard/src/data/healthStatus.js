// src/data/healthStatus.js

// Main anatomy indicators
export const anatomyIndicators = [
  {
    id: 'heart',
    position: { top: '18%', left: '50%' },
    label: 'Healthy Heart',
    status: 'healthy',
    icon: 'FaHeart' // Different icon lib than others
  },
  {
    id: 'lungs',
    position: { top: '35%', right: '20%' }, // Mixed position systems
    label: 'Lungs',
    status: 'critical',
    lastCheckup: '2021-10-10' // ISO format
  }
  // ... more indicators
];

// Status cards data - different structure than indicators
export const statusCards = {
  lungs: {
    title: 'Lungs',
    date: 'Oct 20, 2021', // Different date format
    status: 'critical',
    icon: '🫁' // Emoji instead of icon
  },
  teeth: {
    title: 'Teeth',
    date: 'Nov 5, 2021',
    status: 'warning',
    icon: '🦷',
    // Extra unused property
    priority: 'medium'
  }
  // ... more cards
};