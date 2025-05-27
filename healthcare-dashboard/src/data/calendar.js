// src/data/calendar.js

// Hardcoded month data instead of using date-fns
export const currentMonth = {
  name: 'October 2021',
  year: 2021,
  daysInMonth: 31,
  firstDayOfWeek: 5 // 0=Sunday, but sometimes 1=Monday? Who knows
};

// Appointments mixed with UI concerns
export const appointments = {
  12: [
    { 
      time: '09:00', 
      type: 'dentist',
      title: 'Dentist Appointment',
      doctor: 'Dr. Smith',
      color: '#4CAF50' // Should be in CSS
    },
    {
      time: '13:00',
      type: 'followup',
      title: 'Follow Up',
      doctor: 'Dr. Lee',
      color: '#FF9800'
    }
  ],
  // ... more dates
};

// Would normally be dynamic
export const upcomingAppointments = [
  {
    day: 'Thursday',
    date: 'October 21, 2021',
    appointments: [
      {
        id: 1,
        title: 'Health checkup complete',
        time: '09:00 AM',
        completed: true
      },
      // ... more
    ]
  }
];