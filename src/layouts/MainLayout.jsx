import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Website/Navbar.jsx';
import Footer from '../Website/Footer.jsx';

function MainLayout({ toggleTheme, theme }) {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;