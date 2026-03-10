import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import MainLayout from './layouts/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogDetailsPage from './pages/BlogDetailsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import ScrollToTop from "./Website/ScrollToTop.jsx";

import { setTheme } from './Website/utils/theme.js';

function App() {
  const [theme, setThemeState] = useState('light');

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      easing: 'ease-out-cubic',
    });

    const saved = localStorage.getItem('theme') || 'light';
    setThemeState(saved);
    setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(newTheme);
    setTheme(newTheme);
  };

 return (
  <>
    <ScrollToTop />

    <Routes>
      <Route element={<MainLayout toggleTheme={toggleTheme} theme={theme} />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Route>
    </Routes>
  </>
);
}

export default App;