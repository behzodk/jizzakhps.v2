import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import AnimatedImage from '../components/AnimatedImage';
import { students } from '../data/students';

const PupilsPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique years & countries for filter tabs
  const years = useMemo(() => {
    const set = new Set(students.map(s => s.meta));
    return ['all', ...Array.from(set).sort().reverse()];
  }, []);

  const countries = useMemo(() => {
    const set = new Set(students.map(s => s.country));
    return ['all', ...Array.from(set).sort()];
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const matchYear = selectedYear === 'all' || student.meta === selectedYear;
      const matchCountry = selectedCountry === 'all' || student.country === selectedCountry;
      const matchSearch =
        searchQuery.trim() === '' ||
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.note.toLowerCase().includes(searchQuery.toLowerCase());
      return matchYear && matchCountry && matchSearch;
    });
  }, [selectedYear, selectedCountry, searchQuery]);

  const getCountryFlag = (country: string) => {
    switch (country) {
      case 'USA': return '🇺🇸';
      case 'UK': return '🇬🇧';
      case 'Hungary': return '🇭🇺';
      case 'South Korea': return '🇰🇷';
      case 'Turkey': return '🇹🇷';
      case 'Saudi Arabia': return '🇸🇦';
      case 'Uzbekistan': return '🇺🇿';
      default: return '🎓';
    }
  };

  return (
    <div>
      <Header />
      <Breadcrumb title={t('nav.students')} />

      <div style={{ background: '#f4f7fb', minHeight: '80vh', padding: '40px 0 60px' }}>
        <div className="container">
          {/* Header section */}
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span style={{
              background: '#1B3A8C',
              color: '#fff',
              fontSize: 13,
              fontWeight: 600,
              padding: '6px 16px',
              borderRadius: 20,
              textTransform: 'uppercase',
              letterSpacing: 1
            }}>
              Bizning Faxrimiz
            </span>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#111', marginTop: 12, marginBottom: 8 }}>
              {t('nav.students')} va Ularning Yutuqlari
            </h2>
            <p style={{ color: '#666', fontSize: 16, maxWidth: 650, margin: '0 auto' }}>
              Jizzax shahridagi Prezident maktabining bitiruvchilari dunyoning va mamlakatimizning yetakchi universitetlarida tahsil olmoqdalar.
            </p>
          </div>

          {/* Filters & Search Bar */}
          <div style={{
            background: '#fff',
            borderRadius: 16,
            padding: '20px 24px',
            marginBottom: 32,
            boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }}>
            {/* Search Input */}
            <div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="O'quvchi ismi yoki universitet bo'yicha qidirish..."
                style={{
                  width: '100%',
                  padding: '12px 18px',
                  borderRadius: 10,
                  border: '1px solid #e0e0e0',
                  fontSize: 15,
                  outline: 'none',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.03)'
                }}
              />
            </div>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Year filter */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#555' }}>Yil:</span>
                {years.map(yr => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 8,
                      border: 'none',
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: 'pointer',
                      background: selectedYear === yr ? '#1B3A8C' : '#f0f4f9',
                      color: selectedYear === yr ? '#fff' : '#444',
                      transition: 'all 0.2s'
                    }}
                  >
                    {yr === 'all' ? 'Barcha yillar' : `${yr}-yil`}
                  </button>
                ))}
              </div>

              {/* Country filter */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#555' }}>Davlat:</span>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 8,
                    border: '1px solid #d0d0d0',
                    fontSize: 14,
                    outline: 'none',
                    background: '#fff',
                    cursor: 'pointer'
                  }}
                >
                  <option value="all">Barcha davlatlar</option>
                  {countries.filter(c => c !== 'all').map(c => (
                    <option key={c} value={c}>{getCountryFlag(c)} {c}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Result Count */}
          <div style={{ marginBottom: 20, fontSize: 14, color: '#666', fontWeight: 500 }}>
            Jami o'quvchilar: <strong style={{ color: '#1B3A8C' }}>{filteredStudents.length} ta</strong>
          </div>

          {/* Students Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 24
          }}>
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="hover-lift fade-in-up"
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                  border: student.featured ? '2px solid #1B3A8C' : '1px solid #eef2f7',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                {/* Featured Badge */}
                {student.featured && (
                  <div style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    background: '#FFD700',
                    color: '#000',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: 12,
                    zIndex: 2,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                  }}>
                    ⭐ TOP Grant
                  </div>
                )}

                {/* Photo container */}
                <div style={{
                  height: 260,
                  width: '100%',
                  background: '#e9ecef',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {student.img ? (
                    <AnimatedImage
                      src={student.img}
                      alt={student.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top'
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #1B3A8C 0%, #13748F 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: 48,
                      fontWeight: 700
                    }}>
                      {student.name.charAt(0)}
                    </div>
                  )}
                  {/* Meta badges on image bottom */}
                  <div style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    display: 'flex',
                    gap: 6
                  }}>
                    <span style={{
                      background: 'rgba(0,0,0,0.65)',
                      color: '#fff',
                      fontSize: 12,
                      padding: '2px 8px',
                      borderRadius: 6,
                      backdropFilter: 'blur(4px)'
                    }}>
                      {getCountryFlag(student.country)} {student.country}
                    </span>
                    <span style={{
                      background: 'rgba(27,58,140,0.85)',
                      color: '#fff',
                      fontSize: 12,
                      padding: '2px 8px',
                      borderRadius: 6,
                      backdropFilter: 'blur(4px)',
                      fontWeight: 600
                    }}>
                      {student.meta}-yil
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 10 }}>
                      {student.name}
                    </h4>
                    <p style={{ fontSize: 13.5, color: '#555', lineHeight: 1.6, margin: 0 }}>
                      {student.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredStudents.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#888' }}>
              <h4>Ushbu qidiruv bo'yicha hech qanday o'quvchi topilmadi.</h4>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PupilsPage;
