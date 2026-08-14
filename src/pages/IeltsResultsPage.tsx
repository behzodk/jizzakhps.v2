import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import CertificateModal from '../components/CertificateModal';
import { certificatesData, academicYearsList } from '../data/certificates';
import type { CertificateRecord } from '../data/certificates';

const IeltsResultsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialType = searchParams.get('type') || 'IELTS';
  const [certType, setCertType] = useState<string>(initialType);
  const [selectedScore, setSelectedScore] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCert, setSelectedCert] = useState<CertificateRecord | null>(null);

  const handleTypeChange = (type: string) => {
    setCertType(type);
    if (type === 'SAT') {
      navigate('/results/sat');
    }
  };

  const filteredCerts = useMemo(() => {
    return certificatesData.filter((c) => {
      // Certificate type filter
      if (certType === 'IELTS' && c.testType !== 'IELTS') return false;
      if (certType === 'SAT' && c.testType !== 'SAT') return false;
      // In case user selected All, show both
      if (certType === 'All') {
        // all
      }

      // Year filter
      if (selectedYear !== 'all' && c.academicYear !== selectedYear) {
        return false;
      }

      // Score filter for IELTS
      if (selectedScore !== 'all') {
        if (selectedScore === '8.0+' && c.score < 8.0) return false;
        if (selectedScore === '7.5+' && c.score < 7.5) return false;
        if (selectedScore === '7.0' && (c.score < 7.0 || c.score >= 7.5)) return false;
        if (selectedScore === '6.5' && (c.score < 6.5 || c.score >= 7.0)) return false;
        if (selectedScore === '6.0' && c.score >= 6.5) return false;
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
  }, [certType, selectedScore, selectedYear, searchQuery]);

  return (
    <div>
      <Header />
      <Breadcrumb
        title={t('results_page.ielts_title')}
        items={[
          { label: t('results_page.breadcrumb_results') },
          { label: t('results_page.breadcrumb_ielts') },
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

                {/* By Result */}
                <div className="results-filter-section">
                  <h3 className="results-filter-section-title">{t('results_page.by_result')}</h3>
                  <div className="results-radio-group">
                    <label className={`results-radio-label ${selectedScore === 'all' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="scoreIelts"
                        value="all"
                        checked={selectedScore === 'all'}
                        onChange={() => setSelectedScore('all')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>{t('results_page.all_results')}</span>
                    </label>
                    <label className={`results-radio-label ${selectedScore === '8.0+' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="scoreIelts"
                        value="8.0+"
                        checked={selectedScore === '8.0+'}
                        onChange={() => setSelectedScore('8.0+')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>8.0+</span>
                    </label>
                    <label className={`results-radio-label ${selectedScore === '7.5+' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="scoreIelts"
                        value="7.5+"
                        checked={selectedScore === '7.5+'}
                        onChange={() => setSelectedScore('7.5+')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>7.5+</span>
                    </label>
                    <label className={`results-radio-label ${selectedScore === '7.0' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="scoreIelts"
                        value="7.0"
                        checked={selectedScore === '7.0'}
                        onChange={() => setSelectedScore('7.0')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>7.0</span>
                    </label>
                    <label className={`results-radio-label ${selectedScore === '6.5' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="scoreIelts"
                        value="6.5"
                        checked={selectedScore === '6.5'}
                        onChange={() => setSelectedScore('6.5')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>6.5</span>
                    </label>
                    <label className={`results-radio-label ${selectedScore === '6.0' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="scoreIelts"
                        value="6.0"
                        checked={selectedScore === '6.0'}
                        onChange={() => setSelectedScore('6.0')}
                      />
                      <span className="results-radio-custom"></span>
                      <span>6.0</span>
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
                      {/* Top Preview Banner (styled certificate) */}
                      <div className="cert-card-preview">
                        <div className="cert-card-preview-top">
                          <span className="cert-card-verified">
                            <span className="cert-dot"></span> {t('results_page.verified_result')}
                          </span>
                          <span className="cert-card-badge">
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
                              <strong>{cert.score.toFixed(1)}</strong>
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
                          <div className="cert-card-meta-result">
                            <span>{t('results_page.result_label')}: </span>
                            <strong>{cert.score.toFixed(1)}</strong>
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

export default IeltsResultsPage;
