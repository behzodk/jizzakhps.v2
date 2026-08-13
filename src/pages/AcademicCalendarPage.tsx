import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const AcademicCalendarPage: React.FC = () => {
  const { t } = useTranslation();
  const calendarImg = '/storage/academic_calendar/a22b09c6-e69d-4d7f-8926-5383ec4b3655248.png';

  return (
    <div>
      <Header />
      <Breadcrumb title={t('nav.calendar')} />
      <div className="layout">
        <div className="container pb-5">
          <a href={calendarImg} target="_blank" rel="noreferrer" data-fancybox style={{ display: 'block' }}>
            <img
              src={calendarImg}
              alt={t('nav.calendar')}
              style={{ width: '100%', height: 'auto', borderRadius: 12, cursor: 'zoom-in' }}
            />
          </a>
          <p className="text-center mt-3" style={{ color: '#999', fontSize: 14 }}>
            {t('calendar_page.click_to_zoom')}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AcademicCalendarPage;
