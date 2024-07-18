// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Navbar = ({ children }) => {
  return (
    <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Box>{children}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
