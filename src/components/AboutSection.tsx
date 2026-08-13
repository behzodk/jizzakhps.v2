import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AnimatedImage from './AnimatedImage';
import { useScrollAnimation, useChildrenAnimation } from '../hooks/useScrollAnimation';

import section1Img from '../assets/imgs/section1.jpg';
import section2Img from '../assets/imgs/section2.jpg';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const textRef = useScrollAnimation() as React.RefObject<HTMLDivElement>;
  const rightRef = useChildrenAnimation() as React.RefObject<HTMLDivElement>;

  return (
    <section className="about" id="about">
      <div className="about-section">
        <div className="container">
          <div
            ref={textRef}
            className="about-section-text anim-fade-left"
          >
            <a className="about-section-text-icon section-label-anim" href="#about">
              <i className="i-cake"></i>{t('about.label')}
            </a>
            <h3>{t('about.title')}</h3>
            <div>
              <p>{t('about.text')}</p>
            </div>
            <Link to="/about" className="about-section-text-btn">
              {t('about.readMore')} <i className="i-right"></i>
            </Link>
          </div>
          <div ref={rightRef} className="about-section-right">
            <div className="about-section-right-card">
              <div className="about-section-right-card-item about-section-right-card-item--big hover-lift anim-child anim-zoom" data-delay="0">
                <AnimatedImage src={section1Img} alt="Maktab rasmi 1" />
              </div>
              <div
                className="about-section-right-card-item about-section-right-card-item--banner anim-child anim-fade-up"
                data-delay="160"
                style={{ backgroundImage: 'url("/front/images/about-img-5.svg")' }}
              >
                <div className="about-section-right-card-item-image">
                  <h4>{t('about.banner')}</h4>
                </div>
              </div>
            </div>

            <div className="about-section-right-card">
              <div className="about-section-right-card-item about-section-right-card-item--logo anim-child anim-fade-up" data-delay="240">
                <img src="/storage/about/a17c041b-3852-4d20-a2e4-e43b49aaa0a2309.svg" alt="Logo" />
              </div>
              <div className="about-section-right-card-item about-section-right-card-item--small hover-lift anim-child anim-zoom" data-delay="320">
                <AnimatedImage src={section2Img} alt="Maktab rasmi 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
