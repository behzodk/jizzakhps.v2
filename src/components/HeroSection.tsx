import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const stat3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = [
      { el: titleRef.current, delay: 100 },
      { el: descRef.current, delay: 230 },
      { el: actionsRef.current, delay: 380 },
      { el: stat1Ref.current, delay: 520 },
      { el: stat2Ref.current, delay: 630 },
      { el: stat3Ref.current, delay: 740 },
    ];

    const timers = items.map(({ el, delay }) => {
      if (!el) return null;
      return setTimeout(() => {
        el.classList.add('animate-visible');
      }, delay);
    });

    return () => {
      timers.forEach(timer => timer && clearTimeout(timer));
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__bg">
        <video className="hero__bg-video" autoPlay muted loop playsInline preload="auto">
          <source src="/storage/a17c6dab-eff4-4bbf-99d1-20a95a58a2f24.mp4" type="video/mp4" />
          {t('carousel.video_unsupported')}
        </video>
      </div>
      <div className="hero__container container">
        <div className="hero__placeholder"></div>
        <div className="hero__content">
          <h1 ref={titleRef} className="anim-fade-up">{t('hero.title')}</h1>
          <div ref={descRef} className="anim-fade-up">
            <p>{t('hero.description')}</p>
          </div>
          <div ref={actionsRef} className="hero__actions anim-fade-up">
            <a
              href="https://ariza.piima.uz/application/cabinet"
              className="hero__actions-btn"
              target="_blank"
              rel="noreferrer"
            >
              {t('hero.apply')}
            </a>
            <a href="#about" className="hero__actions-btn hero__actions-btn2">
              {t('hero.details')}
              <i className="i-right"></i>
            </a>
          </div>
        </div>

        <div className="hero__stats">
          <div ref={stat1Ref} className="hero__stats-item anim-fade-up">
            <div className="hero__stats-icon">
              <i className="i-global-edit"></i>
            </div>
            <h3>{t('hero.stat1_title')}</h3>
            <p>{t('hero.stat1_text')}</p>
          </div>
          <div ref={stat2Ref} className="hero__stats-item anim-fade-up">
            <div className="hero__stats-icon">
              <i className="i-book-edit"></i>
            </div>
            <h3>{t('hero.stat2_title')}</h3>
            <p>{t('hero.stat2_text')}</p>
          </div>
          <div ref={stat3Ref} className="hero__stats-item anim-fade-up">
            <div className="hero__stats-icon">
              <i className="i-award"></i>
            </div>
            <h3>{t('hero.stat3_title')}</h3>
            <p>{t('hero.stat3_text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
