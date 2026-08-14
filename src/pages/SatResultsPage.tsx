import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import CertificateModal from '../components/CertificateModal';
import { certificatesData, academicYearsList } from '../data/certificates';
import type { CertificateRecord } from '../data/certificates';

const SatResultsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [certType, setCertType] = useState<string>('SAT');
  const [selectedScore, setSelectedScore] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCert, setSelectedCert] = useState<CertificateRecord | null>(null);

  const handleTypeChange = (type: string) => {
    setCertType(type);
    if (type === 'IELTS') {
      navigate('/results/ielts');
    }
  };

  const filteredCerts = useMemo(() => {
    return certificatesData.filter((c) => {
      // Must be SAT
      if (c.testType !== 'SAT') return false;

      // Year filter
      if (selectedYear !== 'all' && c.academicYear !== selectedYear) {
        return false;
      }

      // Score filter for SAT
      if (selectedScore !== 'all') {
        if (selectedScore === '1500+' && c.score < 1500) return false;
        if (selectedScore === '1400-1490' && (c.score < 1400 || c.score >= 1500)) return false;
        if (selectedScore === '1300-1390' && (c.score < 1300 || c.score >= 1400)) return false;
        if (selectedScore === '1200-1290' && (c.score < 1200 || c.score >= 1300)) return false;
        if (selectedScore === 'under1200' && c.score >= 1200) return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        if (!c.name.toLowerCase().includes(q)) {
          return false;
        }
      }

      return true;
    });
  }, [selectedScore, selectedYear, searchQuery]);

  return (
    <div>
      <Header />
      <Breadcrumb
        title={t('results_page.sat_title')}
        items={[
          { label: t('results_page.breadcrumb_results') },
          { label: t('results_page.breadcrumb_sat') },
        ]}
      />

      <main className="results-page-main">
        <div className="container">
          <div className="results-layout">
            {/* Left Filters Sidebar */}
            <aside className="results-sidebar">
              <div className="results-filter-box">
                <div className="results-filter-header">
                  <span className="results-filter-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                    </svg>
                  </span>
                  <h2 className="results-filter-title">{t('results_page.filters_title')}</h2>
                </div>

                {/* Search Input */}
                <div className="results-filter-section">
                  <div className="results-search-wrap">
                    <input
                      type="text"
                      className="results-search-input"
                      placeholder={t('results_page.search_placeholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <button className="results-search-clear" onClick={() => setSearchQuery('')}>
                        &times;
                      </button>
                    )}
                  </div>
                </div>

                {/* Certificate Type */}
                <div className="results-filter-section">
                  <h3 className="results-filter-section-title">{t('results_page.cert_type')}</h3>
                  <div className="results-radio-group">
                    <label className={`results-radio-label ${certType === 'All' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="certType"
                        value="All"
                        checked={certType === 'All'}
                        onChange={() => handleTypeChange('All')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>{t('results_page.all')}</span>
                    </label>
                    <label className={`results-radio-label ${certType === 'IELTS' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="certType"
                        value="IELTS"
                        checked={certType === 'IELTS'}
                        onChange={() => handleTypeChange('IELTS')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>{t('results_page.ielts')}</span>
                    </label>
                    <label className={`results-radio-label ${certType === 'SAT' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="certType"
                        value="SAT"
                        checked={certType === 'SAT'}
                        onChange={() => handleTypeChange('SAT')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>{t('results_page.sat')}</span>
                    </label>
                    <label className={`results-radio-label ${certType === 'alevel' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="certType"
                        value="alevel"
                        checked={certType === 'alevel'}
                        onChange={() => handleTypeChange('alevel')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>{t('results_page.alevel')}</span>
                    </label>
                    <label className={`results-radio-label ${certType === 'aslevel' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="certType"
                        value="aslevel"
                        checked={certType === 'aslevel'}
                        onChange={() => handleTypeChange('aslevel')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>{t('results_page.aslevel')}</span>
                    </label>
                  </div>
                </div>

                {/* By Result (SAT specific ranges) */}
                <div className="results-filter-section">
                  <h3 className="results-filter-section-title">{t('results_page.by_result')}</h3>
                  <div className="results-radio-group">
                    <label className={`results-radio-label ${selectedScore === 'all' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="scoreSat"
                        value="all"
                        checked={selectedScore === 'all'}
                        onChange={() => setSelectedScore('all')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>{t('results_page.all_results')}</span>
                    </label>
                    <label className={`results-radio-label ${selectedScore === '1500+' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="scoreSat"
                        value="1500+"
                        checked={selectedScore === '1500+'}
                        onChange={() => setSelectedScore('1500+')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>1500+</span>
                    </label>
                    <label className={`results-radio-label ${selectedScore === '1400-1490' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="scoreSat"
                        value="1400-1490"
                        checked={selectedScore === '1400-1490'}
                        onChange={() => setSelectedScore('1400-1490')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>1400 — 1490</span>
                    </label>
                    <label className={`results-radio-label ${selectedScore === '1300-1390' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="scoreSat"
                        value="1300-1390"
                        checked={selectedScore === '1300-1390'}
                        onChange={() => setSelectedScore('1300-1390')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>1300 — 1390</span>
                    </label>
                    <label className={`results-radio-label ${selectedScore === '1200-1290' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="scoreSat"
                        value="1200-1290"
                        checked={selectedScore === '1200-1290'}
                        onChange={() => setSelectedScore('1200-1290')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>1200 — 1290</span>
                    </label>
                    <label className={`results-radio-label ${selectedScore === 'under1200' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="scoreSat"
                        value="under1200"
                        checked={selectedScore === 'under1200'}
                        onChange={() => setSelectedScore('under1200')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>&lt; 1200</span>
                    </label>
                  </div>
                </div>

                {/* Year Obtained */}
                <div className="results-filter-section">
                  <h3 className="results-filter-section-title">{t('results_page.year_obtained')}</h3>
                  <select
                    className="results-year-select"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="all">{t('results_page.all_years')}</option>
                    {academicYearsList.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Reset Filters */}
                {(selectedScore !== 'all' || selectedYear !== 'all' || searchQuery !== '') && (
                  <button
                    className="results-filter-reset"
                    onClick={() => {
                      setSelectedScore('all');
                      setSelectedYear('all');
                      setSearchQuery('');
                    }}
                  >
                    Filtrlarni tozalash
                  </button>
                )}
              </div>
            </aside>

            {/* Right Results Grid */}
            <section className="results-content">
              <div className="results-header-info">
                <span className="results-count-badge">
                  {filteredCerts.length} ta natija
                </span>
              </div>

              {filteredCerts.length === 0 ? (
                <div className="results-empty">
                  <p>{t('results_page.no_results')}</p>
                </div>
              ) : (
                <div className="results-grid">
                  {filteredCerts.map((cert) => (
                    <article
                      key={cert.id}
                      className="cert-card"
                      onClick={() => setSelectedCert(cert)}
                    >
                      {/* Top Preview Banner */}
                      <div className="cert-card-preview cert-card-preview--sat">
                        <div className="cert-card-preview-top">
                          <span className="cert-card-verified">
                            <span className="cert-dot"></span> {t('results_page.verified_result')}
                          </span>
                          <span className="cert-card-badge cert-card-badge--sat">
                            {cert.testType}
                          </span>
                        </div>

                        <div className="cert-card-preview-center">
                          <p className="cert-card-preview-subtitle">
                            {t('results_page.official_cert')}
                          </p>
                          <div className="cert-card-score-box">
                            <span className="cert-card-score-text">
                              {t('results_page.score_label')}:{' '}
                              <strong>{cert.score}</strong>
                            </span>
                          </div>
                        </div>

                        <div className="cert-card-preview-bottom">
                          <span className="cert-card-preview-name">{cert.name}</span>
                          <span className="cert-card-preview-year">{cert.yearNum}</span>
                        </div>
                      </div>

                      {/* Bottom Body */}
                      <div className="cert-card-body">
                        <h4 className="cert-card-name">{cert.name}</h4>
                        <p className="cert-card-sub">{t('results_page.student_subtitle')}</p>
                        <div className="cert-card-meta-row">
                          <div className="cert-card-meta-result cert-card-meta-result--sat">
                            <span>{t('results_page.result_label')}: </span>
                            <strong>{cert.score}</strong>
                          </div>
                          <span className="cert-card-meta-year">{cert.yearNum}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      <Footer />
    </div>
  );
};

export default SatResultsPage;
