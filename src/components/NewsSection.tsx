import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AnimatedImage from './AnimatedImage';
import { useScrollAnimation, useChildrenAnimation } from '../hooks/useScrollAnimation';
import { posts } from '../data/posts';

const NewsSection: React.FC = () => {
  const { t } = useTranslation();

  const mainCards = posts.filter(p => p.img !== null).slice(0, 2);
  const carouselData = posts.filter(p => p.img !== null);

  const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    if (carouselData.length === 0) return;
    setCurrent((index + carouselData.length) % carouselData.length);
  }, [carouselData.length]);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      goTo(current + 1);
    }, 3500);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [current, goTo]);

  const getPos = (index: number): string => {
    let diff = index - current;
    const total = carouselData.length;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    if (diff < -2 || diff > 2) return 'hidden';
    return String(diff);
  };

  const headRef = useScrollAnimation() as React.RefObject<HTMLDivElement>;
  const mainCardsRef = useChildrenAnimation() as React.RefObject<HTMLDivElement>;
  const carouselRef = useScrollAnimation(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <section className="news" id="news">
      <div className="news-section">
        <div className="container">
          <div ref={headRef} className="news-section-link anim-fade-up">
            <div className="news-section-link-text">
              <Link to="/news">
                <i className="i-directbox"></i>{t('news.label')}
              </Link>
              <h3>{t('news.title')}</h3>
            </div>
            <Link to="/news">
              {t('news.viewAll')} <i className="i-right"></i>
            </Link>
          </div>

          <div className="news-section-main">
            <div ref={mainCardsRef} className="news-section-main-wrapper">
              {mainCards.map((item, idx) => (
                <Link
                  key={item.id}
                  to={`/news#${item.id}`}
                  className="news-section-main-wrapper-card hover-lift anim-child anim-fade-up"
                  data-delay={String(idx * 160)}
                >
                  {item.img ? (
                    <AnimatedImage src={item.img} alt={item.title} />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #1B3A8C 0%, #13748F 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      padding: 20,
                      fontWeight: 700,
                      textAlign: 'center'
                    }}>
                      <span>{item.badge}</span>
                    </div>
                  )}
                  <div className="news-section-main-wrapper-card-start">
                    <h4 className="line-clamp-2 no-tooltip">{item.title}</h4>
                    <div className="news-section-main-wrapper-card-start-top"></div>
                    <div className="news-section-main-wrapper-card-start-link">
                      <p><i className="i-calendar-fiber"></i>{item.date}</p>
                      <p><i className="i-eye"></i>{item.views || '100+'}</p>
                      <p>{t('news.view')} <i className="i-right"></i></p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div ref={carouselRef} className="news-section-main-carusel anim-fade-right">
              <div
                className="news-section-main-wrapper__track"
                aria-live="polite"
                aria-label={`${current + 1} / ${carouselData.length}`}
              >
                {carouselData.map((item, index) => {
                  const pos = getPos(index);
                  const isActive = index === current;
                  return (
                    <div
                      key={item.id}
                      className={`news-section-main-wrapper__card${isActive ? ' is-active' : ''}${pos === '-1' ? ' is-prev' : ''}${pos === '1' ? ' is-next' : ''}${pos === 'hidden' ? ' is-hidden' : ''}`}
                      data-pos={pos}
                      role="group"
                      aria-roledescription="slide"
                      aria-hidden={!isActive}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => {
                        if (index === current) window.location.href = `/news#${item.id}`;
                        else goTo(index);
                      }}
                    >
                      {item.img && <img src={item.img} alt={item.title} loading="lazy" draggable={false} />}
                      <div className="news-section-main-wrapper__overlay"></div>
                      <div className="news-section-main-wrapper__content">
                        <h3 className="news-section-main-wrapper__title">{item.title}</h3>
                        <div className="news-section-main-wrapper__bottom">
                          <div className="news-section-main-wrapper__meta">
                            <span><i className="i-calendar-2"></i>{item.date}</span>
                            <span><i className="i-eye"></i>{item.views || '100+'}</span>
                          </div>
                          <Link
                            to={`/news#${item.id}`}
                            className="news-section-main-wrapper__link"
                            tabIndex={isActive ? 0 : -1}
                          >
                            {t('news.view')} <i className="i-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="news-section-main-wrapper__nav">
                <button
                  className="news-section-main-wrapper__btn news-section-main-wrapper__btn--prev"
                  type="button"
                  aria-label="Previous news"
                  onClick={() => goTo(current - 1)}
                >
                  <i className="i-arrow-top"></i>
                </button>
                <button
                  className="news-section-main-wrapper__btn news-section-main-wrapper__btn--next"
                  type="button"
                  aria-label="Next news"
                  onClick={() => goTo(current + 1)}
                >
                  <i className="i-arrow-low"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
