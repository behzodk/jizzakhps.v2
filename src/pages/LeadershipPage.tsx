import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import AnimatedImage from '../components/AnimatedImage';
import { staffList } from '../data/staff';

const LeadershipPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');

  const leaders = staffList.filter(s => s.category === 'leadership');

  return (
    <div>
      <Header />
      <Breadcrumb title={t('nav.leadership')} />
      <div className="layout py-5" style={{ background: '#f8fafc' }}>
        <div className="container">
          {/* Header Info */}
          <div className="text-center mb-5 p-4 p-md-5" style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)', width: '100%' }}>
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
                marginBottom: '14px',
              }}
            >
              {isEn ? 'Leadership' : 'Rahbariyat'}
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>
              {isEn ? 'School Leadership & Administration' : 'Maktab Rahbariyati'}
            </h2>
            <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
              {isEn
                ? 'Guiding academic excellence and international standards at Jizzakh Presidential School.'
                : "Jizzax shahridagi Prezident maktabi boshqaruvi va ma'muriyati."}
            </p>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {leaders.map((leader, i) => (
              <div key={leader.id} className="teacher-card-modern hover-lift">
                <div className="teacher-photo-container" style={{ aspectRatio: '3/4' }}>
                  <AnimatedImage
                    src={leader.img}
                    alt={leader.name}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="teacher-card-body p-4">
                  <span
                    className="subject-badge"
                    style={{
                      background: i === 0 ? '#1B3A8C' : '#e0f2fe',
                      color: i === 0 ? '#ffffff' : '#0369a1',
                      fontWeight: 700,
                    }}
                  >
                    {isEn ? leader.role_en : leader.role_uz}
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: '8px 0 8px 0', lineHeight: 1.3 }}>
                    {leader.name}
                  </h3>
                  <p style={{ fontSize: '15px', color: '#475569', margin: '0 0 20px 0', lineHeight: 1.5, flexGrow: 1 }}>
                    {isEn ? leader.role_en : leader.role_uz}
                  </p>

                  <div className="d-flex flex-wrap gap-2 pt-3 border-top">
                    {leader.phone && (
                      <a href={`tel:${leader.phone.replace(/[^0-9+]/g, '')}`} className="staff-contact-pill" style={{ fontSize: '13px' }}>
                        <i className="i-phone" style={{ color: '#1B3A8C' }}></i>
                        <span>{leader.phone}</span>
                      </a>
                    )}
                    {leader.email && (
                      <a href={`mailto:${leader.email}`} className="staff-contact-pill" style={{ fontSize: '13px' }}>
                        <i className="i-mail" style={{ color: '#1B3A8C' }}></i>
                        <span>{leader.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LeadershipPage;
