import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import './index.css';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import EducationPage from './pages/EducationPage';
import NewsPage from './pages/NewsPage';
import GalleryPage from './pages/GalleryPage';
import LeadershipPage from './pages/LeadershipPage';
import StaffPage from './pages/StaffPage';
import TeachersPage from './pages/TeachersPage';
import PupilsPage from './pages/PupilsPage';
import ApplicationPage from './pages/ApplicationPage';
import AcademicCalendarPage from './pages/AcademicCalendarPage';
import IeltsResultsPage from './pages/IeltsResultsPage';
import SatResultsPage from './pages/SatResultsPage';
import StatisticsPage from './pages/StatisticsPage';

const AppInner: React.FC = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();

  // Scroll to top of page on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        header.classList.toggle('light', window.scrollY <= 30);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const lang = i18n.language.startsWith('en') ? 'en' : 'uz';
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));
  }, [i18n.language, t]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/leadership" element={<LeadershipPage />} />
      <Route path="/staff" element={<StaffPage />} />
      <Route path="/teachers" element={<TeachersPage />} />
      <Route path="/pupils" element={<PupilsPage />} />
      <Route path="/application" element={<ApplicationPage />} />
      <Route path="/academic-calendar" element={<AcademicCalendarPage />} />
      
      <Route path="/results/ielts" element={<IeltsResultsPage />} />
      <Route path="/results/sat" element={<SatResultsPage />} />
      <Route path="/results" element={<IeltsResultsPage />} />
      <Route path="/ielts" element={<IeltsResultsPage />} />
      <Route path="/sat" element={<SatResultsPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <AppInner />
  </BrowserRouter>
);

export default App;
