// components/Footer.tsx
import React from 'react';
import { Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles({
  footer: {
    marginTop: 'auto',
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
  },
});

function Footer() {
    const useStyles = makeStyles({
        title: {
          flexGrow: 1,
        },
      });

  return (
    <footer className="footer">
      <Typography variant="body2">© 2024 BrightTutors. All rights reserved.</Typography>
    </footer>
  );
}

export default Footer;
