// src/data/activity.js

export const weeklyActivity = {
  total: 3, // Would normally calculate this
  days: [
    {
      name: 'Monday',
      shortName: 'Mon',
      appointments: 1,
      // Manually calculated height
      barHeight: '25%'
    },
    // ... more days
    {
      name: 'Sunday',
      shortName: 'Sun',
      appointments: 1,
      barHeight: '25%',
      // Debug property left in
      _test: true
    }
  ]
};