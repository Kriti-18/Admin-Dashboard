// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './themes';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import CalendarPage from './pages/CalendarPage';
import KanbanPage from './pages/KanbanPage';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles.css'; // Ensure this import is here

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Navbar>
          <ThemeSwitcher toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </Navbar>
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/kanban" element={<KanbanPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
