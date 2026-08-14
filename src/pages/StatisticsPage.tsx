import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { getYearlyStatistics } from '../data/certificates';
import type { YearStats } from '../data/certificates';

const StatisticsPage: React.FC = () => {
  const { t } = useTranslation();
  const yearlyStats: YearStats[] = getYearlyStatistics();

  const [activeSatYear, setActiveSatYear] = useState<string | null>(null);
  const [activeIeltsYear, setActiveIeltsYear] = useState<string | null>(null);

  // Maximum scale for chart Y-axis
  const maxBarValue = 26;

  // Calculate totals
  const totalSat = yearlyStats.reduce((acc, y) => acc + y.satCount, 0);
  const totalIelts = yearlyStats.reduce((acc, y) => acc + y.ieltsCount, 0);
  const avgSatOverall = Math.round(
    yearlyStats.reduce((acc, y) => acc + y.satAvg * y.satCount, 0) / (totalSat || 1)
  );
  const avgIeltsOverall = (
    yearlyStats.reduce((acc, y) => acc + y.ieltsAvg * y.ieltsCount, 0) / (totalIelts || 1)
  ).toFixed(1);

  return (
    <div>
      <Header />
      <Breadcrumb
        title={t('statistics_page.title')}
        items={[
          { label: t('statistics_page.breadcrumb_stats') },
          { label: t('statistics_page.breadcrumb_school_stats') },
        ]}
      />

      <main className="stats-page-main">
        <div className="container">
          {/* Header Section */}
          <div className="stats-page-header">
            <span className="stats-page-eyebrow">{t('statistics_page.eyebrow')}</span>
            <h2 className="stats-page-heading">{t('statistics_page.main_heading')}</h2>
            <div className="stats-page-heading-line"></div>
          </div>

          {/* Charts Row */}
          <div className="stats-charts-grid">
            {/* SAT Growth Dynamics Card */}
            <div className="stats-chart-card">
              <div className="stats-chart-card-header">
                <div className="stats-chart-icon stats-chart-icon--sat">
                  <span>&Sigma;</span>
                </div>
                <div className="stats-chart-header-text">
                  <h3 className="stats-chart-title">{t('statistics_page.sat_growth_title')}</h3>
                  <p className="stats-chart-subtitle">{t('statistics_page.sat_growth_subtitle')}</p>
                </div>
              </div>

              {/* Chart Visual */}
              <div className="stats-chart-container">
                <div className="stats-chart-y-axis">
                  <span>24</span>
                  <span>18</span>
                  <span>12</span>
                  <span>6</span>
                  <span>0</span>
                </div>

                <div className="stats-chart-bars-area">
                  <div className="stats-chart-grid-lines">
                    <div className="grid-line" style={{ bottom: '100%' }}></div>
                    <div className="grid-line" style={{ bottom: '75%' }}></div>
                    <div className="grid-line" style={{ bottom: '50%' }}></div>
                    <div className="grid-line" style={{ bottom: '25%' }}></div>
                    <div className="grid-line" style={{ bottom: '0%' }}></div>
                  </div>

                  <div className="stats-chart-bars-row">
                    {yearlyStats.map((item) => {
                      const isHovered = activeSatYear === item.year;
                      const { top1400Plus, tier1300_1390, tier1200_1290, under1200 } = item.satTiers;
                      const total = item.satCount;
                      const barHeightPercent = Math.min(100, (total / maxBarValue) * 100);

                      // Percent of segments inside the bar
                      const pTop = total > 0 ? (top1400Plus / total) * 100 : 0;
                      const p1300 = total > 0 ? (tier1300_1390 / total) * 100 : 0;
                      const p1200 = total > 0 ? (tier1200_1290 / total) * 100 : 0;
                      const pUnder = total > 0 ? (under1200 / total) * 100 : 0;

                      return (
                        <div
                          key={item.year}
                          className={`stats-chart-bar-col ${isHovered ? 'active' : ''}`}
                          onMouseEnter={() => setActiveSatYear(item.year)}
                          onMouseLeave={() => setActiveSatYear(null)}
                        >
                          <div className="stats-chart-bar-wrapper">
                            {/* Hover tooltip */}
                            {isHovered && total > 0 && (
                              <div className="stats-bar-tooltip">
                                <div className="tooltip-title">{item.year}</div>
                                <div className="tooltip-row">
                                  <span className="tooltip-badge tooltip-badge--orange"></span>
                                  <span>1400+: <strong>{top1400Plus}</strong></span>
                                </div>
                                <div className="tooltip-row">
                                  <span className="tooltip-badge tooltip-badge--purple"></span>
                                  <span>1300-1390: <strong>{tier1300_1390}</strong></span>
                                </div>
                                <div className="tooltip-row">
                                  <span className="tooltip-badge tooltip-badge--blue"></span>
                                  <span>1200-1290: <strong>{tier1200_1290}</strong></span>
                                </div>
                                {under1200 > 0 && (
                                  <div className="tooltip-row">
                                    <span className="tooltip-badge tooltip-badge--green"></span>
                                    <span>&lt;1200: <strong>{under1200}</strong></span>
                                  </div>
                                )}
                                <div className="tooltip-total">
                                  <span>{t('statistics_page.total_candidates')}: <strong>{total}</strong></span>
                                </div>
                              </div>
                            )}

                            <div
                              className="stats-stacked-bar"
                              style={{ height: `${Math.max(barHeightPercent, total > 0 ? 10 : 0)}%` }}
                            >
                              {top1400Plus > 0 && (
                                <div
                                  className="bar-segment bar-segment--orange"
                                  style={{ height: `${pTop}%` }}
                                  title={`1400+: ${top1400Plus}`}
                                ></div>
                              )}
                              {tier1300_1390 > 0 && (
                                <div
                                  className="bar-segment bar-segment--purple"
                                  style={{ height: `${p1300}%` }}
                                  title={`1300-1390: ${tier1300_1390}`}
                                ></div>
                              )}
                              {tier1200_1290 > 0 && (
                                <div
                                  className="bar-segment bar-segment--blue"
                                  style={{ height: `${p1200}%` }}
                                  title={`1200-1290: ${tier1200_1290}`}
                                ></div>
                              )}
                              {under1200 > 0 && (
                                <div
                                  className="bar-segment bar-segment--green"
                                  style={{ height: `${pUnder}%` }}
                                  title={`<1200: ${under1200}`}
                                ></div>
                              )}
                            </div>
                          </div>
                          <span className="stats-chart-x-label">{item.year}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="stats-chart-legend">
                <div className="legend-item">
                  <span className="legend-dot legend-dot--orange"></span>
                  <span>{t('statistics_page.sat_tier_1400')}</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot legend-dot--purple"></span>
                  <span>{t('statistics_page.sat_tier_1300')}</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot legend-dot--blue"></span>
                  <span>{t('statistics_page.sat_tier_1200')}</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot legend-dot--green"></span>
                  <span>{t('statistics_page.sat_tier_under1200')}</span>
                </div>
              </div>

              {/* Summary stats */}
              <div className="stats-chart-summary-row">
                <div className="summary-pill">
                  <span className="summary-pill-label">{t('statistics_page.total_candidates')}</span>
                  <span className="summary-pill-val">{totalSat}</span>
                </div>
                <div className="summary-pill">
                  <span className="summary-pill-label">{t('statistics_page.avg_score')}</span>
                  <span className="summary-pill-val">{avgSatOverall}</span>
                </div>
                <div className="summary-pill">
                  <span className="summary-pill-label">{t('statistics_page.highest_score')}</span>
                  <span className="summary-pill-val">1560</span>
                </div>
              </div>
            </div>

            {/* IELTS Growth Dynamics Card */}
            <div className="stats-chart-card">
              <div className="stats-chart-card-header">
                <div className="stats-chart-icon stats-chart-icon--ielts">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div className="stats-chart-header-text">
                  <h3 className="stats-chart-title">{t('statistics_page.ielts_growth_title')}</h3>
                  <p className="stats-chart-subtitle">{t('statistics_page.ielts_growth_subtitle')}</p>
                </div>
              </div>

              {/* Chart Visual */}
              <div className="stats-chart-container">
                <div className="stats-chart-y-axis">
                  <span>24</span>
                  <span>18</span>
                  <span>12</span>
                  <span>6</span>
                  <span>0</span>
                </div>

                <div className="stats-chart-bars-area">
                  <div className="stats-chart-grid-lines">
                    <div className="grid-line" style={{ bottom: '100%' }}></div>
                    <div className="grid-line" style={{ bottom: '75%' }}></div>
                    <div className="grid-line" style={{ bottom: '50%' }}></div>
                    <div className="grid-line" style={{ bottom: '25%' }}></div>
                    <div className="grid-line" style={{ bottom: '0%' }}></div>
                  </div>

                  <div className="stats-chart-bars-row">
                    {yearlyStats.map((item) => {
                      const isHovered = activeIeltsYear === item.year;
                      const { band8Plus, band7_5, band7_0, band6_5, band6_0 } = item.ieltsTiers;
                      const total = item.ieltsCount;
                      const barHeightPercent = Math.min(100, (total / maxBarValue) * 100);

                      const p8 = total > 0 ? (band8Plus / total) * 100 : 0;
                      const p75 = total > 0 ? (band7_5 / total) * 100 : 0;
                      const p70 = total > 0 ? (band7_0 / total) * 100 : 0;
                      const p65 = total > 0 ? (band6_5 / total) * 100 : 0;
                      const p60 = total > 0 ? (band6_0 / total) * 100 : 0;

                      return (
                        <div
                          key={item.year}
                          className={`stats-chart-bar-col ${isHovered ? 'active' : ''}`}
                          onMouseEnter={() => setActiveIeltsYear(item.year)}
                          onMouseLeave={() => setActiveIeltsYear(null)}
                        >
                          <div className="stats-chart-bar-wrapper">
                            {/* Hover tooltip */}
                            {isHovered && total > 0 && (
                              <div className="stats-bar-tooltip">
                                <div className="tooltip-title">{item.year}</div>
                                <div className="tooltip-row">
                                  <span className="tooltip-badge tooltip-badge--orange"></span>
                                  <span>8.0+: <strong>{band8Plus}</strong></span>
                                </div>
                                <div className="tooltip-row">
                                  <span className="tooltip-badge tooltip-badge--purple"></span>
                                  <span>7.5: <strong>{band7_5}</strong></span>
                                </div>
                                <div className="tooltip-row">
                                  <span className="tooltip-badge tooltip-badge--blue"></span>
                                  <span>7.0: <strong>{band7_0}</strong></span>
                                </div>
                                <div className="tooltip-row">
                                  <span className="tooltip-badge tooltip-badge--green"></span>
                                  <span>6.5: <strong>{band6_5}</strong></span>
                                </div>
                                {band6_0 > 0 && (
                                  <div className="tooltip-row">
                                    <span className="tooltip-badge tooltip-badge--teal"></span>
                                    <span>6.0: <strong>{band6_0}</strong></span>
                                  </div>
                                )}
                                <div className="tooltip-total">
                                  <span>{t('statistics_page.total_candidates')}: <strong>{total}</strong></span>
                                </div>
                              </div>
                            )}

                            <div
                              className="stats-stacked-bar"
                              style={{ height: `${Math.max(barHeightPercent, total > 0 ? 10 : 0)}%` }}
                            >
                              {band8Plus > 0 && (
                                <div
                                  className="bar-segment bar-segment--orange"
                                  style={{ height: `${p8}%` }}
                                  title={`8.0+: ${band8Plus}`}
                                ></div>
                              )}
                              {band7_5 > 0 && (
                                <div
                                  className="bar-segment bar-segment--purple"
                                  style={{ height: `${p75}%` }}
                                  title={`7.5: ${band7_5}`}
                                ></div>
                              )}
                              {band7_0 > 0 && (
                                <div
                                  className="bar-segment bar-segment--blue"
                                  style={{ height: `${p70}%` }}
                                  title={`7.0: ${band7_0}`}
                                ></div>
                              )}
                              {band6_5 > 0 && (
                                <div
                                  className="bar-segment bar-segment--green"
                                  style={{ height: `${p65}%` }}
                                  title={`6.5: ${band6_5}`}
                                ></div>
                              )}
                              {band6_0 > 0 && (
                                <div
                                  className="bar-segment bar-segment--teal"
                                  style={{ height: `${p60}%` }}
                                  title={`6.0: ${band6_0}`}
                                ></div>
                              )}
                            </div>
                          </div>
                          <span className="stats-chart-x-label">{item.year}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="stats-chart-legend">
                <div className="legend-item">
                  <span className="legend-dot legend-dot--orange"></span>
                  <span>{t('statistics_page.ielts_tier_8')}</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot legend-dot--purple"></span>
                  <span>{t('statistics_page.ielts_tier_7_5')}</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot legend-dot--blue"></span>
                  <span>{t('statistics_page.ielts_tier_7_0')}</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot legend-dot--green"></span>
                  <span>{t('statistics_page.ielts_tier_6_5')}</span>
                </div>
              </div>

              {/* Summary stats */}
              <div className="stats-chart-summary-row">
                <div className="summary-pill">
                  <span className="summary-pill-label">{t('statistics_page.total_candidates')}</span>
                  <span className="summary-pill-val">{totalIelts}</span>
                </div>
                <div className="summary-pill">
                  <span className="summary-pill-label">{t('statistics_page.avg_score')}</span>
                  <span className="summary-pill-val">{avgIeltsOverall}</span>
                </div>
                <div className="summary-pill">
                  <span className="summary-pill-label">{t('statistics_page.highest_score')}</span>
                  <span className="summary-pill-val">8.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="stats-highlights-section">
            <h3 className="stats-highlights-heading">{t('statistics_page.highlights_title')}</h3>
            <div className="stats-highlights-grid">
              <div className="stats-highlight-card">
                <span className="highlight-val highlight-val--blue">{t('statistics_page.highlight1_val')}</span>
                <p className="highlight-desc">{t('statistics_page.highlight1_label')}</p>
              </div>
              <div className="stats-highlight-card">
                <span className="highlight-val highlight-val--purple">{t('statistics_page.highlight2_val')}</span>
                <p className="highlight-desc">{t('statistics_page.highlight2_label')}</p>
              </div>
              <div className="stats-highlight-card">
                <span className="highlight-val highlight-val--green">{t('statistics_page.highlight3_val')}</span>
                <p className="highlight-desc">{t('statistics_page.highlight3_label')}</p>
              </div>
              <div className="stats-highlight-card">
                <span className="highlight-val highlight-val--orange">{t('statistics_page.highlight4_val')}</span>
                <p className="highlight-desc">{t('statistics_page.highlight4_label')}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StatisticsPage;
