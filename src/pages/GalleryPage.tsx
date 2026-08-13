import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import AnimatedImage from '../components/AnimatedImage';
import { galleryPhotos } from '../data/gallery';
import { useChildrenAnimation } from '../hooks/useScrollAnimation';

const GalleryPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label_uz: 'Barchasi', label_en: 'All' },
    { key: 'campus', label_uz: 'Maktab hududi', label_en: 'Campus' },
    { key: 'events', label_uz: 'Tadbirlar', label_en: 'Events' },
    { key: 'education', label_uz: "Ta'lim va fan", label_en: 'Education' },
    { key: 'students', label_uz: "O'quvchilar", label_en: 'Students' },
    { key: 'sports', label_uz: 'Sport', label_en: 'Sports' },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === activeCategory);

  const gridRef = useChildrenAnimation(0.05) as React.RefObject<HTMLDivElement>;

  const openLightbox = (photoId: number) => {
    const idx = filteredPhotos.findIndex(p => p.id === photoId);
    if (idx !== -1) {
      setSelectedIndex(idx);
    }
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredPhotos.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const currentPhoto = selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

  return (
    <div style={{ background: '#fcfdfe' }}>
      <Header />
      <Breadcrumb title={t('nav.gallery')} />

      <div className="layout py-5" style={{ background: '#f8fafc' }}>
        <div className="container">
          
          {/* Section title & description */}
          <div className="text-center mb-5 p-4 p-md-5 anim-fade-up animate-visible" style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)', width: '100%' }}>
            <span
              style={{
                display: 'inline-block',
                background: '#e0f2fe',
                color: '#0369a1',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px',
              }}
            >
              {isEn ? 'Media & Moments' : 'Foto Lavhalar'}
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>
              {isEn ? 'Our Photo Gallery' : 'Bizning foto galereyamiz'}
            </h2>
            <p style={{ fontSize: '15px', color: '#64748b', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
              {isEn 
                ? 'Captured moments of our school life, special events, modern campus, and academic success.'
                : 'Maktabimiz hayoti, maxsus tadbirlar, zamonaviy bino va o‘quvchilarimizning yutuqlaridan yorqin lavhalar.'
              }
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-5 anim-fade-up animate-visible">
            {categories.map(cat => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: '50px',
                    border: isActive ? '2px solid #1B3A8C' : '1px solid #e2e8f0',
                    background: isActive ? '#1B3A8C' : '#ffffff',
                    color: isActive ? '#ffffff' : '#475569',
                    fontWeight: 600,
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 6px 16px rgba(27, 58, 140, 0.25)' : '0 2px 6px rgba(0,0,0,0.02)',
                  }}
                >
                  {isEn ? cat.label_en : cat.label_uz}
                </button>
              );
            })}
          </div>

          {/* Photo Grid */}
          <div
            ref={gridRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
              width: '100%',
            }}
          >
            {filteredPhotos.map((photo, i) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(photo.id)}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                  background: '#ffffff',
                  aspectRatio: '4/3',
                  border: '1px solid rgba(226, 232, 240, 0.6)',
                }}
                className="gallery-item-card anim-child anim-zoom"
                data-delay={String((i % 3) * 80)}
              >
                {/* Image Wrapper for Scaling */}
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }} className="gallery-img-wrapper">
                  <AnimatedImage
                    src={photo.url}
                    alt={isEn ? photo.title_en : photo.title_uz}
                    className="w-100 h-100 gallery-inner-img"
                    style={{ 
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                </div>

                {/* Info Overlay */}
                <div
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(13, 36, 96, 0.9) 0%, rgba(13, 36, 96, 0.4) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px',
                    color: '#ffffff',
                    opacity: 0,
                    transform: 'translateY(10px)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    pointerEvents: 'none'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '5px 12px',
                      borderRadius: '30px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(8px)',
                      marginBottom: '10px',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {categories.find(c => c.key === photo.category)?.[isEn ? 'label_en' : 'label_uz'] || 'Foto'}
                  </span>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
                    {isEn ? photo.title_en : photo.title_uz}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted" style={{ fontSize: '16px' }}>
                {isEn ? 'No photos found in this category.' : 'Ushbu bo‘limda rasmlar topilmadi.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal with Blur and Navigations */}
      {currentPhoto && selectedIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(9, 14, 36, 0.85)',
            backdropFilter: 'blur(16px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            cursor: 'zoom-out',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          {/* Close button top right */}
          <button
            type="button"
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#fff',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              fontSize: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
              zIndex: 10000
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          >
            ✕
          </button>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={showPrev}
            style={{
              position: 'absolute',
              left: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#fff',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              zIndex: 10000
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#1B3A8C';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#fff';
            }}
          >
            ‹
          </button>

          {/* Image Container */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '960px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'default',
              animation: 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <img
              src={currentPhoto.url}
              alt={isEn ? currentPhoto.title_en : currentPhoto.title_uz}
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                borderRadius: '16px',
                objectFit: 'contain',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            />
            
            {/* Title / Description info block */}
            <div style={{ 
              marginTop: '20px', 
              textAlign: 'center',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              padding: '12px 24px',
              borderRadius: '30px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              maxWidth: '80%'
            }}>
              <p
                style={{
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: 600,
                  margin: 0
                }}
              >
                {isEn ? currentPhoto.title_en : currentPhoto.title_uz}
              </p>
              <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '12px', display: 'block', marginTop: '2px' }}>
                {selectedIndex + 1} / {filteredPhotos.length}
              </span>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={showNext}
            style={{
              position: 'absolute',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#fff',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              zIndex: 10000
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#1B3A8C';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#fff';
            }}
          >
            ›
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
