import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import AnimatedImage from '../components/AnimatedImage';
import { posts, type Post } from '../data/posts';

const NewsPage: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    if (location.hash) {
      const postId = location.hash.replace('#', '');
      const found = posts.find(p => p.id === postId);
      if (found) {
        setSelectedPost(found);
        const el = document.getElementById(postId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [location]);

  return (
    <div>
      <Header />
      <Breadcrumb title={t('nav.news')} />

      <div style={{ background: '#f4f7fb', minHeight: '80vh', padding: '40px 0 60px' }}>
        <div className="container">
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#111', marginBottom: 24 }}>
            {t('nav.news')}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {posts.map((post) => (
              <article
                key={post.id}
                id={post.id}
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: selectedPost?.id === post.id ? '2px solid #1B3A8C' : '1px solid #eaeaea',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ padding: '28px 28px 20px' }}>
                  {/* Header info */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                    <span style={{
                      background: '#1B3A8C',
                      color: '#fff',
                      fontSize: 12,
                      fontWeight: 600,
                      padding: '4px 12px',
                      borderRadius: 20,
                      textTransform: 'uppercase',
                      letterSpacing: 0.5
                    }}>
                      {post.badge}
                    </span>
                    <span style={{ color: '#888', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <i className="i-calendar-fiber" style={{ color: '#1B3A8C' }}></i> {post.date}
                    </span>
                    {post.views && (
                      <span style={{ color: '#888', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <i className="i-eye" style={{ color: '#1B3A8C' }}></i> {post.views} ko'rishlar
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: '#111', lineHeight: 1.4, marginBottom: 16 }}>
                    {post.title}
                  </h3>

                  {/* Body text */}
                  <div style={{ color: '#444', fontSize: 15, lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                    {post.body}
                  </div>
                </div>

                {/* Main image */}
                {post.img && (
                  <div style={{ padding: '0 28px 20px', height: 440 }}>
                    <AnimatedImage
                      src={post.img}
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: 12,
                      }}
                    />
                  </div>
                )}

                {/* Additional gallery images */}
                {post.images && post.images.length > 1 && (
                  <div style={{ padding: '0 28px 28px' }}>
                    <h5 style={{ fontSize: 14, fontWeight: 600, color: '#666', marginBottom: 12 }}>
                      Foto lavhalar:
                    </h5>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                      gap: 12
                    }}>
                      {post.images.map((imgSrc, idx) => (
                        <a
                          key={idx}
                          href={imgSrc}
                          target="_blank"
                          rel="noreferrer"
                          style={{ borderRadius: 8, overflow: 'hidden', display: 'block', height: 100 }}
                        >
                          <AnimatedImage
                            src={imgSrc}
                            alt={`${post.title} ${idx + 1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsPage;
