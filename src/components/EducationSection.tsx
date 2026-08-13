import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, useChildrenAnimation } from '../hooks/useScrollAnimation';

const EducationSection: React.FC = () => {
  const { t } = useTranslation();

  const educationCards = [
    { icon: 'i-teacher', titleKey: 'education.card1_title', textKey: 'education.card1_text' },
    { icon: 'i-global', titleKey: 'education.card2_title', textKey: 'education.card2_text' },
    { icon: 'i-book', titleKey: 'education.card3_title', textKey: 'education.card3_text' },
    { icon: 'i-star', titleKey: 'education.card4_title', textKey: 'education.card4_text' },
    { icon: 'i-book-edit', titleKey: 'education.card5_title', textKey: 'education.card5_text' },
  ];

  const admissionSteps = [
    { titleKey: 'education.step1_title', textKey: 'education.step1_text' },
    { titleKey: 'education.step2_title', textKey: 'education.step2_text' },
    { titleKey: 'education.step3_title', textKey: 'education.step3_text' },
    { titleKey: 'education.step4_title', textKey: 'education.step4_text' },
  ];

  const eduHeadRef = useScrollAnimation() as React.RefObject<HTMLDivElement>;
  const eduCardsRef = useChildrenAnimation() as React.RefObject<HTMLDivElement>;

  const admHeadRef = useScrollAnimation() as React.RefObject<HTMLDivElement>;
  const admStepsRef = useChildrenAnimation() as React.RefObject<HTMLDivElement>;

  return (
    <section className="education" id="education">
      <div className="education-section">
        <div className="container">
          <div className="education-section-main">
            {/* Education cards */}
            <div className="education-section-main-inner">
              <div ref={eduHeadRef} className="education-section-main-inner-text anim-fade-up">
                <p><i className="i-teacher"></i>{t('education.label')}</p>
                <div className="education-section-main-inner-text-link">
                  <h3>{t('education.title')}</h3>
                  <Link to="/education">
                    {t('education.viewAll')} <i className="i-right"></i>
                  </Link>
                </div>
              </div>

              <div ref={eduCardsRef} className="education-section-main-inner-content">
                {educationCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="education-section-main-inner-content-card anim-child anim-fade-up"
                    data-delay={String(idx * 80)}
                  >
                    <i className={card.icon}></i>
                    <h3>{t(card.titleKey)}</h3>
                    <p>{t(card.textKey)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission steps */}
            <div className="education-section-main-inner">
              <div ref={admHeadRef} className="education-section-main-inner-text anim-fade-up">
                <b className="education-section-main-inner-text-icon">
                  <i className="i-document-text"></i>{t('education.admission_label')}
                </b>
                <div className="education-section-main-inner-text-link">
                  <h3>{t('education.admission_title')}</h3>
                  <Link to="/application">
                    {t('education.admission_viewAll')} <i className="i-right"></i>
                  </Link>
                </div>
              </div>

              <div ref={admStepsRef} className="education-section-main-inner-wrapper">
                {admissionSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div
                      className="education-section-main-inner-wrapper-card anim-child anim-fade-left"
                      data-delay={String(idx * 120)}
                    >
                      <i className="i-search-status"></i>
                      <div className="education-section-main-inner-wrapper-card-text">
                        <h5>{t(step.titleKey)}</h5>
                        <p>{t(step.textKey)}</p>
                      </div>
                    </div>
                    {idx < admissionSteps.length - 1 && (
                      <div className="education-section-main-inner-wrapper-link">
                        <i className="i-dropdawun"></i>
                      </div>
                    )}
                  </React.Fragment>
                ))}
                <a
                  href="https://ariza.piima.uz/application/cabinet"
                  target="_blank"
                  rel="noreferrer"
                  className="education-section-main-inner-wrapper-btn anim-child anim-fade-up"
                  data-delay="480"
                >
                  {t('education.apply_btn')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
