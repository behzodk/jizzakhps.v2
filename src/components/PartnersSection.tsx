import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import caImg from '../assets/imgs/CA.png';
import cisImg from '../assets/imgs/cis.png';
import itmaImg from '../assets/imgs/ITMA.png';

const partners = [
  { name: 'Cambridge Assessment', src: caImg },
  { name: 'CIS Accreditation', src: cisImg },
  { name: 'ITMA', src: itmaImg },
];

const carouselPartners = [...partners, ...partners, ...partners];

const PartnersSection: React.FC = () => {
  const { t } = useTranslation();

  const headRef = useScrollAnimation() as React.RefObject<HTMLDivElement>;
  const carouselRef = useScrollAnimation(0.05) as React.RefObject<HTMLDivElement>;

  return (
    <section className="partners pb-5">
      <div className="container pb-0">
        <div ref={headRef} className="section-top anim-fade-up" style={{ marginBottom: '16px' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '700', color: '#111', margin: 0 }}>
            {t('partners.title')}
          </h3>
        </div>
      </div>
      <div ref={carouselRef} className="partners__wrapper anim-fade" style={{ padding: '30px 0' }}>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={600}
          centeredSlides={true}
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            576: { slidesPerView: 2.2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3.5 },
          }}
          className="partners__carousel"
        >
          {carouselPartners.map((partner, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="partners__carousel--item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '140px',
                  background: 'transparent',
                  border: 'none',
                  boxShadow: 'none',
                }}
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  style={{
                    maxHeight: '130px',
                    maxWidth: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersSection;
