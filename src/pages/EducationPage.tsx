import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const stages = [
  { icon: '/storage/page_section_images/a22b7972-b4c6-437f-8041-47da4ee03a86391.svg', key: 'stage1', color: '#1B3A8C' },
  { icon: '/storage/page_section_images/a22b799b-7a45-44ec-9c81-1a28f5d7caa0467.svg', key: 'stage2', color: '#1B5E8C' },
  { icon: '/storage/page_section_images/a22b79c9-8b39-4e48-b8e2-0c65cfba9fa0143.svg', key: 'stage3', color: '#13748F' },
];

const grades = [
  { n: 5, icon: '/storage/page_section_images/a17a9cf9-3d41-42fe-a74c-2e71de7ca9e9270.svg', key: 'g5', color: '#1a8a3c' },
  { n: 4, icon: '/storage/page_section_images/a17a9d44-e02e-4cde-9ecf-89d7d2bfe86f321.svg', key: 'g4', color: '#2e86c1' },
  { n: 3, icon: '/storage/page_section_images/a17a9d6a-ceaf-42b1-b0e2-e2da3c7b98d4395.svg', key: 'g3', color: '#e67e22' },
  { n: 2, icon: '/storage/page_section_images/a17a9d8f-c39e-44d4-8bd4-e8bb1d97cd85373.svg', key: 'g2', color: '#c0392b' },
  { n: 1, icon: '/storage/page_section_images/a17a9dcd-3ff5-4fa2-bff0-8b3fecae2de0399.svg', key: 'g1', color: '#7f1d1d' },
];

const extraIcons = ['🤖', '🎨', '🔬', '🏆', '⚽'];
const extras = ['robotics', 'art', 'science', 'olympics', 'sports'];
const faqItems = ['awakening', 'academic', 'evening'];
const faqIcons = ['☀️', '📚', '🌙'];

const EducationPage: React.FC = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div>
      <Header />
      <Breadcrumb title={t('education_page.title')} />

      <div style={{ background: '#f4f7fb', minHeight: '100vh', paddingBottom: 60 }}>

        {/* ── Intro ─────────────────────────────────────────── */}
        <div style={{ background: '#fff', padding: '48px 0 32px' }}>
          <div className="container">
            <span style={{ color: '#1B3A8C', fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: 2 }}>
              {t('education.label')}
            </span>
            <h2 style={{ fontSize: 30, fontWeight: 700, color: '#111', margin: '10px 0 14px' }}>
              {t('education_page.criteria_title')}
            </h2>
            <p style={{ color: '#555', maxWidth: 720, lineHeight: 1.7 }}>
              {t('education_page.criteria_text')}
            </p>
          </div>
        </div>

        {/* ── Stages ────────────────────────────────────────── */}
        <div style={{ padding: '48px 0' }}>
          <div className="container">
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#111', marginBottom: 28 }}>
              {t('education_page.stages_title')}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 20 }}>
              {stages.map((s) => (
                <div key={s.key} style={{
                  background: s.color,
                  borderRadius: 16,
                  padding: '28px 24px',
                  color: '#fff',
                }}>
                  <img src={s.icon} alt="" style={{ width: 52, height: 52, marginBottom: 14, filter: 'brightness(0) invert(1)' }} />
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{t(`education_page.${s.key}_title`)}</h3>
                  <p style={{ fontSize: 13, opacity: 0.8, marginBottom: 14 }}>{t(`education_page.${s.key}_sub`)}</p>
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {(t(`education_page.${s.key}_subjects`, { returnObjects: true }) as string[]).map((sub, i) => (
                      <li key={i} style={{ fontSize: 14, marginBottom: 5, opacity: 0.95 }}>{sub}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', marginTop: 20, color: '#444', lineHeight: 1.7, borderLeft: '4px solid #1B3A8C' }}>
              {t('education_page.stages_extra')}
            </div>
          </div>
        </div>

        {/* ── Program cards ─────────────────────────────────── */}
        <div style={{ background: '#1B3A8C', padding: '48px 0' }}>
          <div className="container">
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 28 }}>
              {t('education.title')}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 16 }}>
              {['card1','card2','card3','card4','card5'].map((c) => (
                <div key={c} style={{
                  background: 'rgba(255,255,255,0.10)',
                  borderRadius: 14,
                  padding: '22px 18px',
                  border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)',
                }}>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
                    {t(`education.${c}_title`)}
                  </h4>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                    {t(`education.${c}_text`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Daily routine FAQ ─────────────────────────────── */}
        <div style={{ padding: '48px 0' }}>
          <div className="container">
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#111', marginBottom: 28 }}>
              {t('education_page.faq_title')}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqItems.map((item, i) => (
                <div key={item} style={{
                  background: '#fff',
                  borderRadius: 14,
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                  border: openFaq === i ? '1.5px solid #1B3A8C' : '1.5px solid transparent',
                  transition: 'border-color .2s',
                }}>
                  <div
                    onClick={() => toggleFaq(i)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '18px 22px',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontSize: 22 }}>{faqIcons[i]}</span>
                      <div>
                        <h4 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: '#111' }}>
                          {t(`education_page.faq_${item}_title`)}
                        </h4>
                        <p style={{ margin: 0, fontSize: 13, color: '#888', marginTop: 2 }}>
                          {t(`education_page.faq_${item}_sub`)}
                        </p>
                      </div>
                    </div>
                    <span style={{
                      fontSize: 20,
                      color: '#1B3A8C',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform .25s',
                      lineHeight: 1,
                    }}>▾</span>
                  </div>
                  {openFaq === i && (
                    <div style={{ padding: '4px 22px 20px 56px', borderTop: '1px solid #f0f0f0' }}>
                      <ul style={{ margin: '12px 0 0', paddingLeft: 20 }}>
                        {(t(`education_page.faq_${item}_items`, { returnObjects: true }) as string[]).map((line, j) => (
                          <li key={j} style={{ fontSize: 14, color: '#444', marginBottom: 7, lineHeight: 1.5 }}>
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Evaluation / Grades ───────────────────────────── */}
        <div style={{ background: '#fff', padding: '48px 0' }}>
          <div className="container">
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#111', marginBottom: 8 }}>
              {t('education_page.eval_title')}
            </h2>
            <p style={{ color: '#666', marginBottom: 28 }}>{t('education_page.eval_text')}</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              {grades.map((g) => (
                <div key={g.key} style={{
                  flex: '1 1 140px',
                  background: g.color,
                  borderRadius: 14,
                  padding: '24px 16px',
                  textAlign: 'center',
                  color: '#fff',
                }}>
                  <img src={g.icon} alt="" style={{ width: 44, height: 44, marginBottom: 10, filter: 'brightness(0) invert(1)' }} />
                  <div style={{ fontSize: 42, fontWeight: 900, lineHeight: 1 }}>{g.n}</div>
                  <p style={{ fontSize: 13, marginTop: 8, opacity: 0.9 }}>
                    {t(`education_page.${g.key}_text`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Extra activities ──────────────────────────────── */}
        <div style={{ padding: '48px 0' }}>
          <div className="container">
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#111', marginBottom: 8 }}>
              {t('education_page.extra_title')}
            </h2>
            <p style={{ color: '#666', marginBottom: 28 }}>{t('education_page.extra_sub')}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 14 }}>
              {extras.map((e, i) => (
                <div key={e} style={{
                  background: '#fff',
                  borderRadius: 14,
                  padding: '28px 16px',
                  textAlign: 'center',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                  border: '1px solid #eee',
                }}>
                  <div style={{ fontSize: 36, marginBottom: 10 }}>{extraIcons[i]}</div>
                  <h4 style={{ fontSize: 14, fontWeight: 600, color: '#1B3A8C', margin: 0, lineHeight: 1.4 }}>
                    {t(`education_page.extra_${e}`)}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Graduation ────────────────────────────────────── */}
        <div style={{ padding: '0 0 48px' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #1B3A8C 0%, #13748F 100%)',
              borderRadius: 20,
              padding: '40px 40px',
              display: 'flex',
              alignItems: 'center',
              gap: 32,
              color: '#fff',
              flexWrap: 'wrap',
            }}>
              <img
                src="/storage/page_section_images/a22b7cff-e5c4-4c9f-baf7-cc16ffe1a47c234.svg"
                alt=""
                style={{ width: 80, height: 80, filter: 'brightness(0) invert(1)', flexShrink: 0 }}
              />
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
                  {t('education_page.grad_title')}
                </h3>
                <p style={{ fontSize: 15, opacity: 0.9, lineHeight: 1.7, margin: 0, maxWidth: 680 }}>
                  {t('education_page.grad_text')}
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

export default EducationPage;
