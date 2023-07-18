import React from 'react';

const GlobalContext = React.createContext({
  countries: [
    { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai'] },
    { name: 'Pak', value: 'PK', cities: ['Lahore', 'Karachi'] },
    { name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong'] },
  ],
});

export default GlobalContext;
