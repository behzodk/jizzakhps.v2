import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const ApplicationPage: React.FC = () => {
  const { t } = useTranslation();

  const reqIcons = [
    '/storage/page_section_images/a2298903-b30e-4b1c-8568-b2b0dd02ef1b219.svg',
    '/storage/page_section_images/a2298931-29d9-4494-8c05-92f88cef14b1152.svg',
    '/storage/page_section_images/a229894f-01c7-4a8a-9cc5-7d6d3a6c81a1261.svg',
  ];
  const reqKeys = ['who', 'region', 'online'];

  const resultIcons = [
    '/storage/page_section_images/a22989e5-52eb-4a91-8e34-e0e49b0a5e47139.svg',
    '/storage/page_section_images/a2298a0a-32ab-4b1b-b47c-d3a2e04d5e45211.svg',
    '/storage/page_section_images/a22b909f-1a59-41dd-8e73-a04ef4c83c7b228.svg',
  ];
  const resultKeys = ['timeline', 'reserve', 'contact'];
  const resultColors = ['#1a73e8', '#34a853', '#f4a21c'];

  return (
    <div>
      <Header />
      <Breadcrumb title={t('nav.admission')} />
      <div className="layout">
        <div className="container">
          {/* Intro */}
          <div className="application-wrapper-title">
            <h2>{t('application_page.process_title')}</h2>
            <p>{t('application_page.process_text')}</p>
          </div>

          {/* Requirements */}
          <h3 className="mt-5 mb-4">{t('application_page.req_title')}</h3>
          <div className="application-wrapper">
            {reqKeys.map((key, i) => (
              <div key={key} className="application-wrapper-card">
                <img src={reqIcons[i]} alt="" />
                <h4>{t(`application_page.req_${key}_title`)}</h4>
                <p>{t(`application_page.req_${key}_text`)}</p>
              </div>
            ))}
          </div>

          {/* Stage 1 */}
          <h3 className="mt-5 mb-3">{t('application_page.stages_title')}</h3>
          <div className="application-step">
            <div className="application-step-card">
              <h4>1. {t('application_page.stage1_title')}</h4>
              <p>{t('application_page.stage1_text')}</p>
            </div>
            <div className="application-step-card">
              <h4>2. {t('application_page.stage2_title')}</h4>
              <p>{t('application_page.stage2_text')}</p>
            </div>
          </div>

          {/* Results */}
          <h3 className="mt-5 mb-4">{t('application_page.results_title')}</h3>
          <div className="application-results">
            {resultKeys.map((key, i) => (
              <div key={key} className="application-results-card" style={{ borderTop: `4px solid ${resultColors[i]}` }}>
                <img src={resultIcons[i]} alt="" />
                <h4>{t(`application_page.result_${key}_title`)}</h4>
                <p>{t(`application_page.result_${key}_text`)}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <a href="https://ariza.piima.uz/application/cabinet" target="_blank" rel="noreferrer" className="education-section-main-inner-wrapper-btn">
              {t('education.apply_btn')}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplicationPage;
