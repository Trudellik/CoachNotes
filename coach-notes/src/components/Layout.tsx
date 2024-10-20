import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux'; // Import useDispatch to use with redux actions
import { APP_NAME } from '../config/constants';
import { resetStore } from '../features/resetActions'; // Import the reset action

const Layout = () => {
  const dispatch = useDispatch();

  // Handler to dispatch the resetStore action
  const handleResetClick = () => {
    dispatch(resetStore());
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{ backgroundColor: 'teal' }}
    >
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {APP_NAME.toUpperCase()}
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/programme">
            All Programmes
          </Button>
          <Button color="inherit" component={Link} to="/exercise">
            Exercises
          </Button>
          {/* Add the Sign Out button */}
          <Button color="inherit" onClick={handleResetClick}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <Container
        sx={{
          flex: 1,
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Outlet />
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          textAlign: 'center',
          mt: 'auto',
          py: 2,
          backgroundColor: '#f1f1f1',
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
