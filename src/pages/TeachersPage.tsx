import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import AnimatedImage from '../components/AnimatedImage';
import { staffList } from '../data/staff';

const getSubjectBadgeClass = (subject?: string): string => {
  if (!subject) return 'badge-blue';
  const s = subject.toLowerCase();
  if (s.includes('math') || s.includes('matematika')) return 'badge-blue';
  if (s.includes('fizika') || s.includes('physics')) return 'badge-cyan';
  if (s.includes('kimyo') || s.includes('chemistry') || s.includes('biolog') || s.includes('science') || s.includes('tabiiy')) return 'badge-emerald';
  if (s.includes('ingliz') || s.includes('english') || s.includes('til') || s.includes('adabiyot')) return 'badge-purple';
  if (s.includes('informat') || s.includes('computer')) return 'badge-blue';
  if (s.includes('perspectives') || s.includes('yondashuv') || s.includes('business') || s.includes('biznes')) return 'badge-amber';
  if (s.includes('sport') || s.includes('tarbiya') || s.includes('san\'at') || s.includes('musiqa')) return 'badge-rose';
  return 'badge-blue';
};

const TeachersPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');

  const [search, setSearch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const allTeachers = useMemo(() => {
    return staffList.filter(s => s.category === 'teacher');
  }, []);

  const subjects = useMemo(() => {
    const set = new Set<string>();
    allTeachers.forEach(tea => {
      if (tea.subject) set.add(tea.subject);
    });
    return Array.from(set).sort();
  }, [allTeachers]);

  const filteredTeachers = useMemo(() => {
    return allTeachers.filter(tea => {
      const matchSubject = selectedSubject === 'all' || tea.subject === selectedSubject;
      const matchSearch = search.trim() === '' ||
        tea.name.toLowerCase().includes(search.toLowerCase()) ||
        (tea.role_uz && tea.role_uz.toLowerCase().includes(search.toLowerCase())) ||
        (tea.role_en && tea.role_en.toLowerCase().includes(search.toLowerCase()));
      return matchSubject && matchSearch;
    });
  }, [allTeachers, selectedSubject, search]);

  return (
    <div>
      <Header />
      <Breadcrumb title={t('nav.teachers')} />
      <div className="layout py-5" style={{ background: '#f8fafc' }}>
        <div className="container">
          {/* Hero Banner */}
          <div className="page-hero-banner mb-5">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(255, 255, 255, 0.18)',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '14px',
                    color: '#ffffff',
                  }}
                >
                  {isEn ? 'Faculty & Educators' : 'Pedagogik Jamoa'}
                </span>
                <h1 style={{ fontSize: '32px', fontWeight: 800, margin: '0 0 12px 0', lineHeight: 1.25, color: '#ffffff' }}>
                  {isEn ? 'Our Distinguished Teachers' : 'Maktabimizning Ustozlari va Xalqaro Mutaxassislari'}
                </h1>
                <p style={{ fontSize: '15px', opacity: 0.92, maxWidth: '680px', margin: 0, lineHeight: 1.6, color: '#f1f5f9' }}>
                  {isEn
                    ? 'A dedicated international and local faculty shaping young innovators through Cambridge Assessment Curriculum.'
                    : "Prezident maktabi o‘quvchilariga ilg‘or Cambridge dasturlari asosida bilim beruvchi xalqaro va milliy ekspert ustozlar."}
                </p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '16px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '16px 28px',
                    borderRadius: '16px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '36px', fontWeight: 800, lineHeight: 1, color: '#ffffff' }}>{allTeachers.length}</div>
                    <div style={{ fontSize: '13px', opacity: 0.9, marginTop: '4px', color: '#ffffff', fontWeight: 600 }}>
                      {isEn ? 'Active Teachers' : 'Pedagoglar'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar & Subject Filter Controls */}
          <div className="mb-5 p-4" style={{ background: '#ffffff', borderRadius: '18px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)', border: '1px solid #e2e8f0' }}>
            <div className="row g-3 align-items-center mb-4">
              <div className="col-lg-6">
                <input
                  type="text"
                  placeholder={isEn ? 'Search by teacher name or subject...' : "O‘qituvchi ismi yoki fani bo‘yicha qidirish..."}
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="staff-search-input"
                />
              </div>
              <div className="col-lg-6 text-lg-end">
                <span className="text-muted small fw-semibold">
                  {isEn ? `Showing ${filteredTeachers.length} of ${allTeachers.length} educators` : `Jami ${allTeachers.length} nafardan ${filteredTeachers.length} nafari ko‘rsatilmoqda`}
                </span>
              </div>
            </div>

            {/* Subject Filter Pills */}
            <div className="d-flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedSubject('all')}
                style={{
                  padding: '8px 18px',
                  borderRadius: '24px',
                  border: selectedSubject === 'all' ? '2px solid #1B3A8C' : '1px solid #e2e8f0',
                  background: selectedSubject === 'all' ? '#1B3A8C' : '#ffffff',
                  color: selectedSubject === 'all' ? '#ffffff' : '#334155',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: selectedSubject === 'all' ? '0 4px 12px rgba(27, 58, 140, 0.25)' : 'none',
                }}
              >
                {isEn ? 'All Subjects' : 'Barcha fanlar'} ({allTeachers.length})
              </button>
              {subjects.map(subj => (
                <button
                  key={subj}
                  type="button"
                  onClick={() => setSelectedSubject(subj)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '24px',
                    border: selectedSubject === subj ? '2px solid #1B3A8C' : '1px solid #e2e8f0',
                    background: selectedSubject === subj ? '#1B3A8C' : '#ffffff',
                    color: selectedSubject === subj ? '#ffffff' : '#334155',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: selectedSubject === subj ? '0 4px 12px rgba(27, 58, 140, 0.25)' : 'none',
                  }}
                >
                  {subj}
                </button>
              ))}
            </div>
          </div>

          {/* Teachers Cards Grid */}
          <div
            className="mb-5"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
              width: '100%',
            }}
          >
            {filteredTeachers.map((teacher) => (
              <div key={teacher.id} className="teacher-card-modern hover-lift">
                <div className="teacher-photo-container" style={{ aspectRatio: '3/4' }}>
                  <AnimatedImage
                    src={teacher.img}
                    alt={teacher.name}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="teacher-card-body p-4">
                  <span className={`subject-badge ${getSubjectBadgeClass(teacher.subject)}`}>
                    {teacher.subject || (isEn ? 'Faculty' : 'Pedagog')}
                  </span>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '4px 0 8px 0', lineHeight: 1.3 }}>
                    {teacher.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.5, flexGrow: 1 }}>
                    {isEn ? teacher.role_en : teacher.role_uz}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredTeachers.length === 0 && (
            <div className="text-center py-5 my-4" style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <h4 style={{ color: '#334155', fontWeight: 700 }}>
                {isEn ? 'No teachers found' : 'O‘qituvchi topilmadi'}
              </h4>
              <p className="text-muted mb-0">
                {isEn ? 'Try adjusting your search criteria.' : 'Qidiruv so‘zini o‘zgartirib ko‘ring.'}
              </p>
            </div>
          )}

          {/* Standard Features Footer Banner */}
          <div
            className="mt-4 p-4 p-md-5"
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
              width: '100%',
            }}
          >
            <div className="row g-4 text-center">
              <div className="col-md-4">
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: '#e0f2fe',
                    color: '#1B3A8C',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '26px',
                    marginBottom: '16px',
                  }}
                >
                  <i className="i-teacher"></i>
                </div>
                <h5 style={{ fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  {isEn ? 'Cambridge Certified' : 'Cambridge Sertifikatlari'}
                </h5>
                <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                  {isEn ? 'Teachers trained in Cambridge Assessment International Education' : 'Xalqaro ta’lim dasturlari bo‘yicha sertifikatlangan'}
                </p>
              </div>
              <div className="col-md-4">
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: '#dcfce7',
                    color: '#15803d',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '26px',
                    marginBottom: '16px',
                  }}
                >
                  <i className="i-global"></i>
                </div>
                <h5 style={{ fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  {isEn ? 'Foreign Faculty' : 'Xorijiy Mutaxassislar'}
                </h5>
                <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                  {isEn ? 'Native English speaking educators and global perspective trainers' : 'Xorijiy davlatlardan jalb etilgan yetakchi o‘qituvchilar'}
                </p>
              </div>
              <div className="col-md-4">
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: '#f3e8ff',
                    color: '#7e22ce',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '26px',
                    marginBottom: '16px',
                  }}
                >
                  <i className="i-award"></i>
                </div>
                <h5 style={{ fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  {isEn ? 'STEAM Innovation' : 'STEAM Texnologiyalari'}
                </h5>
                <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                  {isEn ? 'Interactive labs, robotics, and cutting-edge academic methodologies' : 'Zamonaviy laboratoriyalar va amaliy fan yondashuvi'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeachersPage;
