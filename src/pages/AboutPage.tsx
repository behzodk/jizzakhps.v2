import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import AnimatedImage from '../components/AnimatedImage';

import section1Img from '../assets/imgs/section1.jpg';
import section2Img from '../assets/imgs/section2.jpg';

const graduateProfiles = [
  { icon: '/storage/page_section_images/a22b08fc-45fd-4000-9232-167adb37dfb2141.svg', key: 'ethical' },
  { icon: '/storage/page_section_images/a22bbe8f-90ce-4ac7-a569-0dacd10cc507474.svg', key: 'critical' },
  { icon: '/storage/page_section_images/a22bbef1-8e8a-4ce4-a161-d021538361dc395.svg', key: 'responsible' },
  { icon: '/storage/page_section_images/a22bbf5e-4527-4e75-b78b-e4217e0e0d622.svg', key: 'academic' },
  { icon: '/storage/page_section_images/a22bc00a-d617-46be-b0a6-f0101dc7d20c338.svg', key: 'leader' },
  { icon: '/storage/page_section_images/a22bc075-0947-401c-a052-ae1072ef5075235.svg', key: 'global' },
  { icon: '/storage/page_section_images/a22bc0d6-67ac-42f2-8071-7c63a13f9fa6413.svg', key: 'collaborator' },
  { icon: '/storage/page_section_images/a22bc11b-26f7-4745-9b48-eef276c6d78b467.svg', key: 'balanced' },
];

const certImages = [
  '/storage/about/a1f10fdc-2b4a-4fd3-aaf4-67e2a80a2ab2161.jpg',
  '/storage/about/a1f110ea-9a4e-4b5b-b1e3-82fc0a20dfa9160.jpg',
  '/storage/about/a1f11fb2-b153-4283-a71c-e8c8093b3b0d88.jpg',
];

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <Breadcrumb title={t('about_page.title')} />
      <div className="layout">
        <div className="container">
          <div className="about-page">
            {/* Hero wrapper */}
            <div className="about-page-wrapper">
              <div className="about-page-wrapper-overlay">
                <AnimatedImage src={section1Img} alt="Maktab rasmi" />
                <div className="about-page-wrapper-overlay-list">
                  <h3>{t('about_page.info_title')}</h3>
                  <div><p>{t('about_page.info_text')}</p></div>
                </div>
              </div>
              <div className="about-page-wrapper-cards">
                <div className="about-page-wrapper-cards-card hover-lift">
                  <AnimatedImage src={section1Img} alt="Section 1" />
                </div>
                <div className="about-page-wrapper-cards-card hover-lift">
                  <AnimatedImage src={section2Img} alt="Section 2" />
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="about-page-content">
              <div className="about-page-content-card hover-lift fade-in-up">
                <h4><i className="i-eye"></i>{t('about_page.vision_title')}</h4>
                <div><p>{t('about_page.vision_text')}</p></div>
              </div>
              <div className="about-page-content-card hover-lift fade-in-up">
                <h4><i className="i-gps"></i>{t('about_page.mission_title')}</h4>
                <div><p>{t('about_page.mission_text')}</p></div>
              </div>
            </div>

            {/* Graduate profile */}
            <div className="about-page-info">
              <div className="about-page-info-text">
                <h4>{t('about_page.profile_title')}</h4>
                <p>{t('about_page.profile_intro')}</p>
              </div>
              <div className="about-page-info-list">
                {graduateProfiles.map((p) => (
                  <div key={p.key} className="about-page-info-list-card hover-lift">
                    <div><img src={p.icon} alt="" /></div>
                    <h5>{t(`about_page.profile_${p.key}_title`)}</h5>
                    <div><p>{t(`about_page.profile_${p.key}_text`)}</p></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification box */}
            <div className="about-page-box">
              <h3>{t('about_page.cert_title')}</h3>
              <div className="about-page-box-image d-flex gap-3 flex-wrap justify-content-center">
                {certImages.map((src, i) => (
                  <a key={i} href="#" className="about-page-box-image-item hover-lift">
                    <img src={src} alt="" style={{ maxWidth: 220, borderRadius: 8 }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
