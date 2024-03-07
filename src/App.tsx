// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import CareerPage from './CareerPage';
import { StyledEngineProvider } from '@mui/material';


function App() {
  return (

    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
        <Outlet />
      </Router>
      {/* <IDE /> */}
    </StyledEngineProvider>
  );
}

export default App;
