// src/pages/CalendarPage.js
import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Typography variant="h4">Calendar</Typography>
      <Box sx={{ marginTop: 2 }}>
        <Calendar onChange={setDate} value={date} />
      </Box>
    </div>
  );
};

export default CalendarPage;
