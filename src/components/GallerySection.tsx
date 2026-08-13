import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { galleryPhotos } from '../data/gallery';

interface GalleryCard {
  images: { src: string; isBig?: boolean }[];
}

const buildGalleryCards = (): GalleryCard[] => {
  const cards: GalleryCard[] = [];
  for (let i = 0; i < galleryPhotos.length; i += 3) {
    const chunk = galleryPhotos.slice(i, i + 3);
    if (chunk.length > 0) {
      cards.push({
        images: [
          { src: chunk[0].url, isBig: true },
          { src: (chunk[1] || galleryPhotos[0]).url },
          { src: (chunk[2] || galleryPhotos[1]).url },
        ],
      });
    }
  }
  return cards;
};

const galleryCards = buildGalleryCards();

const GallerySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-section-link">
          <p><i className="i-gallery"></i>{t('gallery.label')}</p>
          <div className="gallery-section-link-text">
            <h3>{t('gallery.title')}</h3>
            <Link to="/gallery">
              {t('gallery.viewAll')} <i className="i-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        speed={700}
        centeredSlides={true}
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          1000: { slidesPerView: 2 },
          1500: { slidesPerView: 3 },
          2000: { slidesPerView: 4 },
        }}
        className="gallery-section-carousel"
      >
        {galleryCards.map((card, cardIdx) => (
          <SwiperSlide key={cardIdx}>
            <div className="gallery-section-carousel-card">
              {card.images.map((img, imgIdx) => (
                <Link
                  key={imgIdx}
                  className={img.isBig ? 'big' : ''}
                  to="/gallery"
                  draggable={false}
                >
                  <img src={img.src} draggable={false} alt="gallery photo" loading="lazy" />
                </Link>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GallerySection;
