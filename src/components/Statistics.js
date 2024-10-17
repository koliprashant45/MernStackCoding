import React from 'react';

const Statistics = ({ statistics }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Sales Amount: ${statistics.totalSalesAmount}</p>
      <p>Sold Items: {statistics.soldItems}</p>
      <p>Unsold Items: {statistics.unsoldItems}</p>
    </div>
  );
};

export default Statistics;
