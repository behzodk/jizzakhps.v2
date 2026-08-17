import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const AdmissionRulesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <Breadcrumb
        title={t('admission_rules.page_title')}
        items={[
          { label: t('admission_rules.breadcrumb_category'), link: '/qabul-nizomi' },
          { label: t('admission_rules.page_title') },
        ]}
      />

      <main className="admission-page-main">
        <div className="container">
          {/* Section 1: Qabul jarayoni */}
          <section className="admission-section">
            <div className="admission-header-card">
              <span className="admission-badge">{t('admission_rules.section1_badge')}</span>
              <h2 className="admission-section-title">{t('admission_rules.section1_title')}</h2>
              <p className="admission-section-lead">{t('admission_rules.section1_desc')}</p>
            </div>
          </section>

          {/* Section 2: Nomzodlarga talablar va ro'yxatdan o'tish */}
          <section className="admission-section">
            <div className="text-center mb-4">
              <span className="admission-step-badge">{t('admission_rules.section2_badge')}</span>
              <h2 className="admission-section-title text-center">{t('admission_rules.section2_title')}</h2>
            </div>

            <div className="admission-requirements-grid">
              {/* Step 1 */}
              <div className="admission-req-card">
                <div className="admission-step-number">1</div>
                <div className="admission-req-icon-box">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <h3 className="admission-req-card-title">{t('admission_rules.req1_title')}</h3>
                <p className="admission-req-card-text">
                  {t('admission_rules.req1_text_p1')}{' '}
                  <strong className="text-primary">{t('admission_rules.req1_steam')}</strong>{' '}
                  {t('admission_rules.req1_text_p2')}{' '}
                  <strong className="text-primary">{t('admission_rules.req1_grades')}</strong>{' '}
                  {t('admission_rules.req1_text_p3')}
                </p>
              </div>

              {/* Step 2 */}
              <div className="admission-req-card">
                <div className="admission-step-number">2</div>
                <div className="admission-req-icon-box">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 className="admission-req-card-title">{t('admission_rules.req2_title')}</h3>
                <p className="admission-req-card-text">
                  {t('admission_rules.req2_text')}
                </p>
              </div>

              {/* Step 3 */}
              <div className="admission-req-card">
                <div className="admission-step-number">3</div>
                <div className="admission-req-icon-box">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7.5" r="4"></circle>
                    <polyline points="17 11 19 13 23 9"></polyline>
                  </svg>
                </div>
                <h3 className="admission-req-card-title">{t('admission_rules.req3_title')}</h3>
                <p className="admission-req-card-text">
                  {t('admission_rules.req3_text_p1')}{' '}
                  <strong className="text-primary">{t('admission_rules.req3_portal1')}</strong> {t('admission_rules.req3_or')}{' '}
                  <strong className="text-primary">{t('admission_rules.req3_portal2')}</strong>{' '}
                  {t('admission_rules.req3_text_p2')}
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Bosqichlar */}
          <section className="admission-section">
            <div className="text-center mb-4">
              <span className="admission-step-badge">{t('admission_rules.section3_badge')}</span>
              <h2 className="admission-section-title text-center">{t('admission_rules.section3_title')}</h2>
            </div>

            <div className="admission-stages-container">
              {/* Stage 1 */}
              <div className="admission-stage-card">
                <div className="admission-stage-header">
                  <span className="admission-stage-tag">{t('admission_rules.stage1_tag')}</span>
                  <h3 className="admission-stage-title">{t('admission_rules.stage1_title')}</h3>
                </div>

                <div className="admission-stage-body">
                  <div className="admission-stage-subheader">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                      <line x1="8" y1="6" x2="16" y2="6"></line>
                      <line x1="16" y1="14" x2="16" y2="18"></line>
                      <path d="M16 10h.01"></path>
                      <path d="M12 10h.01"></path>
                      <path d="M8 10h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M8 14h.01"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M8 18h.01"></path>
                    </svg>
                    <span>{t('admission_rules.stage1_sub')}</span>
                  </div>

                  <div className="admission-stage-grid">
                    <div className="admission-detail-box">
                      <div className="admission-detail-title text-success">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>{t('admission_rules.stage1_tasks_count')}</span>
                      </div>
                      <p className="admission-detail-desc">{t('admission_rules.stage1_tasks_desc')}</p>
                    </div>

                    <div className="admission-detail-box">
                      <div className="admission-detail-title text-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                          <polyline points="2 17 12 22 22 17"></polyline>
                          <polyline points="2 12 12 17 22 12"></polyline>
                        </svg>
                        <span>{t('admission_rules.stage1_tiers_title')}</span>
                      </div>
                      <p className="admission-detail-desc">
                        {t('admission_rules.stage1_tiers_desc')}{' '}
                        <strong>{t('admission_rules.tier_a')}</strong>,{' '}
                        <strong>{t('admission_rules.tier_b')}</strong>{' '}
                        {t('admission_rules.and')}{' '}
                        <strong>{t('admission_rules.tier_c')}</strong>{' '}
                        {t('admission_rules.stage1_tiers_suffix')}
                      </p>
                    </div>

                    <div className="admission-detail-box">
                      <div className="admission-detail-title text-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>{t('admission_rules.stage1_time_val')}</span>
                      </div>
                      <p className="admission-detail-desc">{t('admission_rules.stage1_time_desc')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="admission-stage-card">
                <div className="admission-stage-header">
                  <span className="admission-stage-tag">{t('admission_rules.stage2_tag')}</span>
                  <h3 className="admission-stage-title">{t('admission_rules.stage2_title')}</h3>
                </div>

                <div className="admission-stage-body">
                  <div className="admission-stage-subheader">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <span>{t('admission_rules.stage2_structure_title')}</span>
                  </div>

                  <div className="admission-stage-grid">
                    <div className="admission-detail-box">
                      <div className="admission-detail-title text-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        <span>{t('admission_rules.stage2_critical_title')}</span>
                      </div>
                      <p className="admission-detail-desc">{t('admission_rules.stage2_critical_val')}</p>
                    </div>

                    <div className="admission-detail-box">
                      <div className="admission-detail-title text-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        <span>{t('admission_rules.stage2_english_title')}</span>
                      </div>
                      <p className="admission-detail-desc">{t('admission_rules.stage2_english_val')}</p>
                    </div>

                    <div className="admission-detail-box">
                      <div className="admission-detail-title text-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                          <line x1="8" y1="6" x2="16" y2="6"></line>
                          <line x1="16" y1="14" x2="16" y2="18"></line>
                        </svg>
                        <span>{t('admission_rules.stage2_math_title')}</span>
                      </div>
                      <p className="admission-detail-desc">{t('admission_rules.stage2_math_val')}</p>
                    </div>
                  </div>

                  <div className="admission-stage-footer-row">
                    <div className="admission-detail-box">
                      <div className="admission-detail-title text-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>{t('admission_rules.stage2_total_time_title')}</span>
                      </div>
                      <p className="admission-detail-desc">{t('admission_rules.stage2_total_time_val')}</p>
                    </div>

                    <div className="admission-detail-box flex-2">
                      <div className="admission-detail-title text-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span>{t('admission_rules.stage2_priority_title')}</span>
                      </div>
                      <p className="admission-detail-desc">{t('admission_rules.stage2_priority_desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Natijalar va qo'shimcha imkoniyatlar */}
          <section className="admission-section">
            <div className="text-center mb-4">
              <span className="admission-step-badge">{t('admission_rules.section4_badge')}</span>
              <h2 className="admission-section-title text-center">{t('admission_rules.section4_title')}</h2>
            </div>

            <div className="admission-results-grid">
              {/* Card 1 */}
              <div className="admission-result-card admission-result-card--blue">
                <div className="admission-result-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <path d="m9 16 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="admission-result-card-title">{t('admission_rules.res_timeline_title')}</h3>
                <div className="admission-result-card-text">
                  <p>• {t('admission_rules.res_stage1')}: <strong className="text-primary">{t('admission_rules.res_stage1_days')}</strong></p>
                  <p>• {t('admission_rules.res_stage2')}: <strong className="text-primary">{t('admission_rules.res_stage2_days')}</strong></p>
                  <span className="admission-note-text">{t('admission_rules.res_note')}</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="admission-result-card admission-result-card--teal">
                <div className="admission-result-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="5" x2="5" y2="19"></line>
                    <circle cx="6.5" cy="6.5" r="2.5"></circle>
                    <circle cx="17.5" cy="17.5" r="2.5"></circle>
                  </svg>
                </div>
                <h3 className="admission-result-card-title">{t('admission_rules.res_reserve_title')}</h3>
                <p className="admission-result-card-text">
                  {t('admission_rules.res_reserve_p1')}{' '}
                  <strong className="text-teal">{t('admission_rules.res_reserve_count')}</strong>{' '}
                  {t('admission_rules.res_reserve_p2')}
                </p>
              </div>

              {/* Card 3 */}
              <div className="admission-result-card admission-result-card--amber">
                <div className="admission-result-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="admission-result-card-title">{t('admission_rules.res_contact_title')}</h3>
                <div className="admission-result-card-text">
                  <p>{t('admission_rules.res_contact_intro')}</p>
                  <p>Call-center: <strong className="text-amber">1206</strong></p>
                  <p>Sayt: <a href="https://piima.uz" target="_blank" rel="noreferrer" className="text-primary font-bold">piima.uz</a></p>
                  <p>Tel: <strong>+998 71 207-99-98</strong></p>
                </div>
              </div>
            </div>
          </section>

          {/* Action CTA */}
          <div className="admission-cta-box">
            <a
              href="https://ariza.piima.uz/application/cabinet"
              target="_blank"
              rel="noreferrer"
              className="admission-apply-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span>{t('admission_rules.apply_online_btn')}</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdmissionRulesPage;
