// components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@mui/material';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

function Navbar() {
 

  const useStyles = makeStyles({
    // Your styles here
  });
  

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="title">
          BrightTutors
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/career">Career</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
