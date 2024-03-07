import React from 'react';
import { Typography, Container, AppBar, Button, Toolbar } from '@mui/material';
import './CareerPage.css'; // Importing external CSS file
import { useNavigate } from 'react-router-dom';

function CareerPage() {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">

<Toolbar>
  <Button color="inherit"  onClick={() => {
            console.log("clicked");
            navigate("/");
          }}>Home</Button>
  <Typography variant="h6" className="companyName" sx={{ flexGrow: 1, textAlign: 'center' }}>
    BrightTutors
  </Typography>
  <Button color="inherit" onClick={() => {
    
  }}>Careers</Button>
</Toolbar>

</AppBar>
<Container maxWidth="md" className="content">
        <Typography variant="h2" align="center" gutterBottom>
          Careers at BrightTutors
        </Typography>
        <Typography variant="body1" paragraph>
          Currently, there are no job openings available. Please check back later.
        </Typography>
        <Typography variant="body1" paragraph>
          For any suggestions or queries, please send a request to <a href="mailto:abc@gmail.com">abc@gmail.com</a>. Thank you.
        </Typography>
      </Container>
    </div>
  );
}

export default CareerPage;
