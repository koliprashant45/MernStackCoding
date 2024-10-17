import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import TransactionsTable from './components/TransactionsTable';

function App() {
  const [month, setMonth] = useState('March');
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  const fetchStatistics = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5500/statistics?month=${month}`);
      setStatistics(response.data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  }, [month]); // Dependency on month

  const fetchBarChartData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5500/bar-chart?month=${month}`);
      setBarChartData(response.data);
    } catch (error) {
      console.error('Error fetching bar chart data:', error);
    }
  }, [month]); // Dependency on month

  const fetchPieChartData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5500/pie-chart?month=${month}`);
      setPieChartData(response.data);
    } catch (error) {
      console.error('Error fetching pie chart data:', error);
    }
  }, [month]); // Dependency on month

  useEffect(() => {
    fetchStatistics();
    fetchBarChartData();
    fetchPieChartData();
  }, [fetchStatistics, fetchBarChartData, fetchPieChartData]); // Call fetch functions

  return (
    <div>
      <Navbar month={month} setMonth={setMonth} />
      <h1>MERN Stack Dashboard</h1>
      <Statistics statistics={statistics} />
      <BarChart data={barChartData} />
      <PieChart data={pieChartData} />
      <TransactionsTable month={month} />
    </div>
  );
}

export default App;
