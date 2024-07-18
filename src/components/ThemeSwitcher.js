// src/components/ThemeSwitcher.js
import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeSwitcher = ({ toggleTheme, isDarkMode }) => {
  const theme = useTheme();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {isDarkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeSwitcher;
