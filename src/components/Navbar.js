import React from 'react';

const Navbar = ({ month, setMonth }) => {
  return (
    <nav>
      <h2>Select Month</h2>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
    </nav>
  );
};

export default Navbar;
