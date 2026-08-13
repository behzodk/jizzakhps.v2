import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PresidentSection: React.FC = () => {
  const { t } = useTranslation();

  const imgRef = useScrollAnimation(0.15) as React.RefObject<HTMLImageElement>;
  const contentRef = useScrollAnimation(0.15) as React.RefObject<HTMLDivElement>;
  const decorRef = useScrollAnimation(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <section className="president">
      <div className="president-section">
        <div className="container">
          <img
            ref={imgRef}
            className="anim-fade"
            src="/storage/prezident_nutqi/a2296895-cc23-4867-9691-2c09c1a1380e296.png"
            alt=""
          />
          <div ref={decorRef} className="president-section-image anim-zoom">
            <img src="/storage/page_section_images/a2296511-3be8-486c-a2e5-4aa7c92735c3263.png" alt="" />
          </div>
          <div ref={contentRef} className="president-section-content anim-fade-right">
            <h3 className="president-section-content-title">{t('president.title')}</h3>
            <div className="president-section-content-text">
              <p>{t('president.quote')}</p>
            </div>
            <div className="mt-auto d-flex gap-3 align-items-center">
              <div>
                <img src="/front/images/gerb.png" height="70" width="71" alt="" />
              </div>
              <div>
                <p className="president-section-content-name mb-2">
                  {t('president.name')}
                </p>
                <p className="president-section-content-position">
                  {t('president.position')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentSection;
