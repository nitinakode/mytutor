import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper } from '@mui/material';
import './HomePage.css'; // Importing external CSS file
import image from './image.jpg';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">

        <Toolbar>
          <Button color="inherit" onClick={() => {
            console.log("clicked");
            navigate("/");
          }}>Home</Button>
          <Typography variant="h6" className="companyName" sx={{ flexGrow: 1, textAlign: 'center' }}>
            BrightTutors
          </Typography>
          <Button color="inherit" onClick={() => {
            navigate("/career");
          }}>Careers</Button>
        </Toolbar>

      </AppBar>
      <div className="hero">
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom>
            Welcome to BrightTutors
          </Typography>
          <Typography variant="subtitle1" paragraph>
            Empower your learning experience with our online tutoring services.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you need help with technical subjects like web development, app development, data science,
            or want to explore non-technical topics such as language learning, arts, or music,
            our expert tutors are here to assist you.
          </Typography>
          <Button variant="contained" color="primary" className="button" onClick={() => {

            navigate("/career");
          }}>
            Get Started
          </Button>
        </Container>
      </div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} className="featureItem">
              <Typography variant="h4" className="featureIcon">
                Tech
              </Typography>
              <Typography variant="h6" paragraph>
                We offer tutoring in various technical fields including:
              </Typography>
              <Typography variant="body1" paragraph>
                - Web Development
              </Typography>
              <Typography variant="body1" paragraph>
                - App Development
              </Typography>
              <Typography variant="body1" paragraph>
                - Data Science
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} className="featureItem">
              <Typography variant="h4" className="featureIcon">
                Non-Tech
              </Typography>
              <Typography variant="h6" paragraph>
                Explore non-technical topics such as:
              </Typography>
              <Typography variant="body1" paragraph>
                - Language Learning
              </Typography>
              <Typography variant="body1" paragraph>
                - Arts & Crafts
              </Typography>
              <Typography variant="body1" paragraph>
                - part time jobs
              </Typography>

            </Paper>
          </Grid>
        </Grid>
      </Container>

      <footer className="footer">
        <Typography variant="body2" align="center">
          © 2024 BrightTutors. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default HomePage;
