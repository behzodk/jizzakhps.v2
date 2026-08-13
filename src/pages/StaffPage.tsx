import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import AnimatedImage from '../components/AnimatedImage';
import { staffList } from '../data/staff';

const StaffPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');

  const [search, setSearch] = useState('');

  // Only keep staff members who have real photos
  const photoStaff = useMemo(() => {
    return staffList.filter(s => s.category === 'staff' && Boolean(s.img));
  }, []);

  const filteredStaff = useMemo(() => {
    return photoStaff.filter(item => {
      return search.trim() === '' ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.role_uz.toLowerCase().includes(search.toLowerCase()) ||
        item.role_en.toLowerCase().includes(search.toLowerCase());
    });
  }, [photoStaff, search]);

  return (
    <div>
      <Header />
      <Breadcrumb title={t('nav.staff')} />
      <div className="layout py-5" style={{ background: '#f8fafc' }}>
        <div className="container">
          {/* Header Info */}
          <div className="mb-5 p-4 p-md-5" style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)', width: '100%' }}>
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
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
                  {isEn ? 'Support & Staff' : 'Xodimlar va Mutaxassislar'}
                </span>
                <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', margin: '0 0 8px 0', lineHeight: 1.25 }}>
                  {isEn ? 'School Specialists & Staff' : 'Maktab Mutaxassislari va Xodimlari'}
                </h2>
                <p style={{ color: '#64748b', margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
                  {isEn
                    ? 'Our dedicated school counselors, psychologists, and facility supervisors.'
                    : "Prezident maktabining maslahatchilari, psixologlari va mas'ul xodimlari."}
                </p>
              </div>
              <div className="col-lg-5">
                <input
                  type="text"
                  placeholder={isEn ? 'Search staff by name or role...' : "Xodimlarni qidirish..."}
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="staff-search-input"
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
              width: '100%',
            }}
          >
            {filteredStaff.map((staff) => (
              <div key={staff.id} className="teacher-card-modern hover-lift">
                <div className="teacher-photo-container" style={{ aspectRatio: '3/4' }}>
                  <AnimatedImage
                    src={staff.img}
                    alt={staff.name}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="teacher-card-body p-4">
                  <span className="subject-badge badge-blue">
                    {isEn ? 'Specialist' : 'Mutaxassis'}
                  </span>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '4px 0 8px 0', lineHeight: 1.3 }}>
                    {staff.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.5, flexGrow: 1 }}>
                    {isEn ? staff.role_en : staff.role_uz}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredStaff.length === 0 && (
            <div className="text-center py-5 my-4" style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <h4 style={{ color: '#334155', fontWeight: 700 }}>
                {isEn ? 'No staff members found' : 'Xodimlar topilmadi'}
              </h4>
              <p className="text-muted mb-0">
                {isEn ? 'Try adjusting your search query.' : 'Qidiruv so‘zini o‘zgartirib ko‘ring.'}
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StaffPage;
